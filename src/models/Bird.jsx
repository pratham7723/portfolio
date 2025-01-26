import React, { useEffect, useRef } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene)
    const { actions } = useAnimations(animations, birdRef)


    useEffect(() => {
        actions['Take 001'].play();
    }, [])

    // DELTA IS THE TIME ELAPSED BETWEEN TWO FRAMES
    useFrame(({ clock, camera }) => {
        // UPDATE THE Y POSITION TO SIMULATE THE BIRD MOVING IN A SIN WAVE
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // CHECK IF BIRD REACHED A CERTAIN ENDPOINT RELATIVE TO THE CAMERA
        if (birdRef.current.position.x > camera.position.x + 10) {
            // ROTATE THE BIRD
            birdRef.current.rotation.y = Math.PI;
        }
        else if (birdRef.current.position.x < camera.position.x - 10) {
            // CHANGE DIRECTION TO FORWARD AND RESET THE BIRD'S ROTATION
            birdRef.current.rotation.y = 0;
        }

        // UPDATE X AND Z POSITION BASED ON DIRECTION
        if (birdRef.current.rotation.y === 0) {
            // MOVING FORWARD
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            // MOVING BACKWARD
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    });

    return (
        <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            {/* HERE THE SCENE IS THE BIRD */}
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird