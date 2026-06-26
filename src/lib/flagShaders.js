// GLSL for the site-wide flowing UAE-flag backdrop (see FlowingFlag.jsx).
// A full-screen plane is displaced by layered "wind" waves anchored at the left
// hoist; the flag is drawn procedurally (no texture) and lit by the wave normal
// so the folds catch light like cloth. Colours match the `uae.*` Tailwind tokens.

export const flagVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;   // 0..n — scroll-velocity boost
  uniform vec2  uMouse;    // -1..1 pointer position
  uniform float uAmp;      // base ripple amplitude

  varying vec2  vUv;
  varying vec2  vFlagUv;   // wave-advected UV used to sample the flag
  varying vec3  vNormal;
  varying float vH;

  // Layered wind field. uv.x = 0 at the hoist (fixed), 1 at the free edge.
  float wave(vec2 uv, float t) {
    float edge = uv.x;                       // amplitude grows toward the free edge
    float h = 0.0;
    h += sin(uv.x *  7.0 + t * 1.6) * 0.50;
    h += sin(uv.x * 13.0 - t * 2.1 + uv.y * 5.0) * 0.22;
    h += sin((uv.x * 2.0 + uv.y * 3.0) * 3.14159 + t * 1.2) * 0.30;
    h += sin(uv.y *  9.0 - t * 0.9) * 0.12;
    return h * edge;
  }

  void main() {
    vUv = uv;
    float t = uTime;
    float amp = uAmp * (1.0 + uScroll * 1.5);

    float h = wave(uv, t);

    // soft localized push toward the pointer
    float d = distance(uv, uMouse * 0.5 + 0.5);
    h += exp(-d * d * 16.0) * 0.7 * (0.5 + uScroll);

    vH = h;

    // advect the flag pattern so the stripes themselves ripple
    vFlagUv = uv + vec2(h, h) * amp;

    // normal from the gradient of the wave field, for cloth-like shading
    float e = 0.0025;
    float dx = (wave(uv + vec2(e, 0.0), t) - wave(uv - vec2(e, 0.0), t)) / (2.0 * e);
    float dy = (wave(uv + vec2(0.0, e), t) - wave(uv - vec2(0.0, e), t)) / (2.0 * e);
    vNormal = normalize(vec3(-dx * amp, -dy * amp, 1.0));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export const flagFragmentShader = /* glsl */ `
  precision highp float;

  varying vec2  vUv;
  varying vec2  vFlagUv;
  varying vec3  vNormal;
  varying float vH;

  uniform float uOpacity;
  uniform float uSoften;   // mix toward warm paper to stay on-brand / legible

  // Procedural UAE flag: red hoist band (left 1/4) + green/white/black thirds.
  vec3 flagColor(vec2 uv) {
    vec3 red   = vec3(0.808, 0.067, 0.149); // #ce1126
    vec3 green = vec3(0.000, 0.478, 0.239); // #007a3d
    vec3 white = vec3(0.970, 0.965, 0.950);
    vec3 black = vec3(0.100, 0.100, 0.115); // ~#1a1a1a
    float aa = 0.006;

    vec3 stripes = mix(black, white, smoothstep(0.3333 - aa, 0.3333 + aa, uv.y));
    stripes = mix(stripes, green, smoothstep(0.6667 - aa, 0.6667 + aa, uv.y));

    float hoist = smoothstep(0.25 - aa, 0.25 + aa, uv.x); // 0 inside band, 1 outside
    return mix(red, stripes, hoist);
  }

  void main() {
    vec3 base = flagColor(clamp(vFlagUv, 0.0, 1.0));

    vec3 n = normalize(vNormal);
    vec3 lightDir = normalize(vec3(0.40, 0.55, 0.75));
    float diff = max(dot(n, lightDir), 0.0);
    float shade = 0.78 + 0.40 * diff;       // ambient + diffuse
    shade *= 1.0 + vH * 0.06;               // gentle trough darkening
    base *= shade;

    // soften toward warm paper so the backdrop stays calm and text stays readable
    vec3 paper = vec3(0.945, 0.917, 0.866);
    base = mix(base, paper, uSoften);

    gl_FragColor = vec4(base, uOpacity);
  }
`
