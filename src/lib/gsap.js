// Central GSAP setup. Registers plugins once and re-exports the pieces the app
// uses, so components import from here rather than reaching into the package.
// Keeping registration in one module avoids double-registration warnings.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export { gsap, ScrollTrigger, useGSAP }
