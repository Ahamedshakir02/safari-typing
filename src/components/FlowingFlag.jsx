import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap.js'
import { getLenis } from '../lib/lenis.js'
import { prefersReducedMotion } from '../lib/motion.js'
import { flagVertexShader, flagFragmentShader } from '../lib/flagShaders.js'

/**
 * Site-wide flowing UAE-flag backdrop. A fixed full-viewport WebGL plane sits
 * behind all content (`-z-10`) and ripples like cloth — continuously in the
 * wind, harder as you scroll (Lenis velocity), with a soft push toward the
 * pointer. Real content layers on translucent panels above it (see Section.jsx)
 * so the flag reads through without hurting legibility.
 *
 * Three.js is imported dynamically so it stays out of the critical bundle and
 * never touches a server/prerender pass. Rendering shares GSAP's ticker (like
 * SmoothScroll) rather than spawning its own rAF. Under prefers-reduced-motion
 * it renders a single still frame; with no WebGL it bows out and the cream page
 * background shows.
 */
export default function FlowingFlag() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let cancelled = false
    let teardown = () => {}

    import('three').then((THREE) => {
      if (cancelled || !canvasRef.current) return
      teardown = init(THREE, canvas)
    })

    return () => {
      cancelled = true
      teardown()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  )
}

// Sets up the scene and returns a teardown function.
function init(THREE, canvas) {
  let renderer
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
  } catch {
    return () => {} // no WebGL — leave the cream backdrop in place
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
  camera.position.z = 1

  const geometry = new THREE.PlaneGeometry(2, 2, 120, 72)
  const uniforms = {
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uAmp: { value: 0.05 },
    uOpacity: { value: 1 },
    uSoften: { value: 0.26 },
  }
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: flagVertexShader,
    fragmentShader: flagFragmentShader,
    transparent: true,
  })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const setSize = () => renderer.setSize(window.innerWidth, window.innerHeight, false)
  setSize()

  // Fade the whole canvas in via CSS (deterministic, independent of the rAF loop)
  // rather than animating a uniform. Render one frame up front so it's never blank.
  canvas.style.opacity = '0'
  canvas.style.transition = 'opacity 1.4s ease'
  const fadeIn = () => {
    requestAnimationFrame(() => {
      canvas.style.opacity = '1'
    })
  }
  renderer.render(scene, camera)

  const targetMouse = new THREE.Vector2(0, 0)
  const onPointer = (e) => {
    targetMouse.set(
      (e.clientX / window.innerWidth) * 2 - 1,
      -((e.clientY / window.innerHeight) * 2 - 1),
    )
  }
  const reduced = prefersReducedMotion()
  const onResize = () => {
    setSize()
    if (reduced) renderer.render(scene, camera)
  }
  window.addEventListener('pointermove', onPointer, { passive: true })
  window.addEventListener('resize', onResize)

  // Reduced motion: one still, gently-rippled frame, no animation loop.
  if (reduced) {
    uniforms.uTime.value = 1.4
    renderer.render(scene, camera)
    canvas.style.opacity = '1'
    return () => {
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }

  // Start the fade once the brand loader hands off (or immediately if it's done).
  if (window.__safariLoaderDone) fadeIn()
  else window.addEventListener('safari:loader-done', fadeIn, { once: true })

  let last = performance.now()
  const tick = () => {
    const now = performance.now()
    if (document.hidden) {
      last = now
      return
    }
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    uniforms.uTime.value += dt

    // ripple harder with scroll velocity (Lenis), easing toward the target
    const lenis = getLenis()
    const boost = Math.min(Math.abs(lenis?.velocity || 0) / 30, 1.2)
    uniforms.uScroll.value += (boost - uniforms.uScroll.value) * 0.08

    const m = uniforms.uMouse.value
    m.x += (targetMouse.x - m.x) * 0.06
    m.y += (targetMouse.y - m.y) * 0.06

    renderer.render(scene, camera)
  }
  gsap.ticker.add(tick)

  return () => {
    gsap.ticker.remove(tick)
    window.removeEventListener('pointermove', onPointer)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('safari:loader-done', fadeIn)
    geometry.dispose()
    material.dispose()
    renderer.dispose()
  }
}
