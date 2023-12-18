import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from '../assets/3D/pirate-island2.glb'
const Island2 = ({currentAnimation, isRotating, setRotating, setCurrentStage, ...props})=> {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(scene);
    const { actions } = useAnimations(animations, group);
    // useEffect(()=> {
    //     actions['Watch|Take 001|BaseLayer'].play()
    // },[actions, currentAnimation])
    return (
        <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="pirate-islandglb">
          <mesh
            name="Base"
            geometry={nodes.Base.geometry}
            material={materials.Standardmaterial}
            position={[0, 0.005, 0]}
            scale={0.025}
          />
          <mesh
            name="Barrel_2"
            geometry={nodes.Barrel_2.geometry}
            material={materials["15 - Default"]}
            position={[1.066, 0.041, -1.822]}
            scale={0.025}
          />
          <mesh
            name="Crate"
            geometry={nodes.Crate.geometry}
            material={materials["Material #21"]}
            position={[-2.46, 0.275, 0.426]}
            scale={0.025}
          />
          <mesh
            name="Island"
            geometry={nodes.Island.geometry}
            material={materials.Standardmaterial}
            position={[0, 0.203, 0]}
            scale={0.025}
          />
          <mesh
            name="Barrel"
            geometry={nodes.Barrel.geometry}
            material={materials["15 - Default"]}
            position={[1.302, 0.126, 1.738]}
            scale={0.025}
          />
          <mesh
            name="Stand"
            geometry={nodes.Stand.geometry}
            material={materials.Cannon}
            position={[0.474, 0.646, -0.996]}
            scale={0.025}
          />
          <mesh
            name="Rim_Right"
            geometry={nodes.Rim_Right.geometry}
            material={materials.Cannon}
            position={[0.757, 0.546, -0.941]}
            scale={0.025}
          />
          <mesh
            name="Rim_Left"
            geometry={nodes.Rim_Left.geometry}
            material={materials.Cannon}
            position={[0.302, 0.565, -1.016]}
            scale={0.025}
          />
          <mesh
            name="Big_Bottle_1"
            geometry={nodes.Big_Bottle_1.geometry}
            material={materials["Material #1"]}
            position={[0.319, 0.732, 0.499]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Big_Bottle_2"
            geometry={nodes.Big_Bottle_2.geometry}
            material={materials["Material #1"]}
            position={[0.674, 0.624, 0.727]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Big_Bottle_3"
            geometry={nodes.Big_Bottle_3.geometry}
            material={materials["Material #1"]}
            position={[-0.001, 0.66, 1.156]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Birds_Nest"
            geometry={nodes.Birds_Nest.geometry}
            material={materials["03 - Default"]}
            position={[-0.763, 0.041, -1.8]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Bottle"
            geometry={nodes.Bottle.geometry}
            material={materials["Material #2"]}
            position={[0.918, 0.754, 0.226]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Chest"
            geometry={nodes.Chest.geometry}
            material={materials["Material #11"]}
            position={[0.797, 0.638, 0.168]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Compass"
            geometry={nodes.Compass.geometry}
            material={materials["Material #3"]}
            position={[0.58, 0.692, 0.593]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Crate001"
            geometry={nodes.Crate001.geometry}
            material={materials["08 - Default"]}
            position={[-0.097, 0.587, 0.952]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Diamond_1"
            geometry={nodes.Diamond_1.geometry}
            material={materials["Material #4"]}
            position={[0.976, 0.577, 0.338]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Diamond_2"
            geometry={nodes.Diamond_2.geometry}
            material={materials["Material #4"]}
            position={[0.968, 0.536, 0.39]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Lantern001"
            geometry={nodes.Lantern001.geometry}
            material={materials["Material #6"]}
            position={[0.886, 0.755, 0.105]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Palm_Tree_2"
            geometry={nodes.Palm_Tree_2.geometry}
            material={materials["07 - Default"]}
            position={[0.065, 0.567, -0.663]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="POST"
            geometry={nodes.POST.geometry}
            material={materials["01 - Default"]}
            position={[0.555, 0.569, 0.542]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Rounded_Bottle"
            geometry={nodes.Rounded_Bottle.geometry}
            material={materials["Material #7"]}
            position={[0.427, 0.712, 0.352]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Ruby_1"
            geometry={nodes.Ruby_1.geometry}
            material={materials["Material #5"]}
            position={[0.926, 0.583, 0.391]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Ruby_2"
            geometry={nodes.Ruby_2.geometry}
            material={materials["Material #5"]}
            position={[1.011, 0.552, 0.383]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Ruby_3"
            geometry={nodes.Ruby_3.geometry}
            material={materials["Material #5"]}
            position={[0.98, 0.573, 0.295]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Ship_Wheel"
            geometry={nodes.Ship_Wheel.geometry}
            material={materials["01 - Default"]}
            position={[-0.517, 0.809, 0.352]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Skull"
            geometry={nodes.Skull.geometry}
            material={materials["Material #8"]}
            position={[-0.172, 0.651, -0.167]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Sword"
            geometry={nodes.Sword.geometry}
            material={materials["Material #22"]}
            position={[-0.303, 0.861, -0.189]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Telescope"
            geometry={nodes.Telescope.geometry}
            material={materials["Material #9"]}
            position={[1.032, 0.659, 0.127]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Watch"
            geometry={nodes.Watch.geometry}
            material={materials["Material #10"]}
            position={[0.834, 0.764, 0.29]}
            rotation={[0, 0.01, 0]}
            scale={[0.031, 0.009, 0.031]}
          />
          <mesh
            name="Palm_Tree_003"
            geometry={nodes.Palm_Tree_003.geometry}
            material={materials["07 - Default"]}
            position={[-0.549, 0.567, 0.174]}
            scale={0.025}
          />
          <mesh
            name="Cylinder001"
            geometry={nodes.Cylinder001.geometry}
            material={materials["01 - Default.001"]}
            position={[-0.242, 0.968, -0.207]}
            rotation={[-2.767, 0.041, -0.245]}
            scale={0.001}
          />
          <pointLight
            name="Skull_Light"
            intensity={0.5}
            decay={2}
            color="#40df00"
            position={[-0.198, 0.703, -0.168]}
            rotation={[Math.PI, -0.552, Math.PI]}
            scale={0.025}
          />
          <pointLight
            name="Lantern_Light"
            intensity={2.5}
            decay={2}
            color="#ecd600"
            position={[0.886, 0.829, 0.104]}
            rotation={[Math.PI, -0.552, Math.PI]}
            scale={0.025}
          />
        </group>
      </group>
    </group>
  );
}

export default Island2
