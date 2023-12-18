import { useGLTF } from '@react-three/drei'
import React from 'react'
import NightSkyScene from '../assets/3D/extracted_minecraft_java_editions_stars.glb'
const NightSky = () => {
    const nightSky = useGLTF(NightSkyScene)
  return (
    <mesh>
        <primitive object={nightSky.scene}/>
    </mesh>
  )
}

export default NightSky