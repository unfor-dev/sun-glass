import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

export default function CameraAnimation() {
    const { camera } = useThree()
    const cameraTarget = useRef(new THREE.Vector3(0, -0.5, 0))

    useFrame(() => {
        camera.lookAt(cameraTarget.current)
    })

    useGSAP(() => {
        const tl = gsap.timeline()

        // Birinchi animatsiya (element-1)
        tl.fromTo(
            camera.position,
            { x: 0, y: 1, z: 4 },
            {
                x: 1.56,
                y: -1.01,
                z: 2,
                ease: 'power1.inOut',  // Ease-in-out (silliq o'zgarish)
                scrollTrigger: {
                    trigger: '.element-1',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 0.5
                }
            }
        )
        .fromTo(
            cameraTarget.current,
            { x: 0, y: -0.5, z: 0 },
            {
                x: -4,
                y: 0,
                z: 0,
                ease: 'power1.inOut', // Ease-in-out (silliq o'zgarish)
                scrollTrigger: {
                    trigger: '.element-1',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 0.5
                }
            },
            '<'
        )
        .to(
            camera.position,
            {
                x: 0,
                y: -1.01,
                z: 5,
                ease: 'power2.inOut',  // Easier transition for better smoothness
                scrollTrigger: {
                    trigger: '.element-2',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 0.5
                }
            },
            '+=0.7'  // Add small delay to make transition smoother
        )
        .to(
            cameraTarget.current,
            {
                x: 4,
                y: 0,
                z: 0,
                ease: 'power2.inOut',  // Smooth transition
                scrollTrigger: {
                    trigger: '.element-2',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 0.5
                }
            },
            '<'
        )
    }, [])

    return null
}
