/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from '../assets/3D/island2-opt.glb'
import { a } from '@react-spring/three'

const Island = ({isRotating, setRotating, setCurrentStage, ...props})=> {
  const { gl, viewport } = useThree()
  const { nodes, materials } = useGLTF(islandScene);
  const islandRef = useRef()
  const lastX = useRef(0)
  const rotationSpeed = useRef(0)
  const dampingFactor = 0.95
  const handlePointerDown = (e)=> {
    e.stopPropagation()
    e.preventDefault()
    setRotating(true)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    lastX.current = clientX
  }
  const handlePointerUp = (e)=> {
    e.stopPropagation()
    e.preventDefault()
    setRotating(false)
  }
  const handlePointerMove = (e)=> {
    e.stopPropagation()
    e.preventDefault()
    
    if(isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const delta = (clientX - lastX.current) / viewport.width
      islandRef.current.rotation.y += delta * 0.01 * Math.PI
      lastX.current = clientX
      rotationSpeed.current = delta * 0.01 * Math.PI
      console.log('Dragging...');
    }
  }
  const handleKeydown = (e) => {
    if(e.key === 'ArrowLeft') {
      if(!isRotating) setRotating(true)
      islandRef.current.rotation.y += .01 * Math.PI
    } else if(e.key === 'ArrowRight') {
      if(!isRotating) setRotating(true)
      islandRef.current.rotation.y -= .01 * Math.PI
    }
  }
  const handleKeyUp = (e)=> {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight')
    setRotating(false)
  }
  useFrame(()=> {
    if(!isRotating) {
      rotationSpeed.current *= dampingFactor
      if(Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0
      }
      islandRef.current.rotation.y += rotationSpeed.current
    } else {
      const rotation = islandRef.current.rotation.y 

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })
  useEffect(()=> {
    const canvas = gl.domElement
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('keyup', handleKeyUp)
    
    return ()=> {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointerup', handlePointerUp)
      canvas.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUp, handleKeydown, handleKeyUp])
  return (
    <a.group ref={islandRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model_2.geometry}
        material={nodes.model_2.material}
      />
    </a.group> 
  );
}

export default Island