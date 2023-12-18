import React, { useEffect, useRef } from 'react'
import birdScene from '../assets/3D/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
const bird = () => {
    const birdRef = useRef()
    const { scene, animations } = useGLTF(birdScene)
    const { actions } = useAnimations(animations, birdRef)
    useEffect(()=> {
      actions['Take 001'].play()
    },[])
    useFrame((_,delta)=>{
      
    })
  return (
    <mesh position={[-5,2,1]} scale={[0.003,0.003,0.003]} ref={birdRef}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default bird