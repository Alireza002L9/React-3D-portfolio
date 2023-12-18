import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import Island2 from "../models/pirate-island"
import Loader from "../components/Loader"
import { OrbitControls } from "@react-three/drei"
import NightSky from "../models/NightSky"

const Projects = () => {
  return (
    <section className=" h-full night-color">
      <Canvas
      camera={{
        position: [0, 4, 6.5],
        fov: 75,
        near: 0.1,
        far: 100
      }}

      >
        <directionalLight intensity={3} position={[0,6,4]}/>
        {/* <pointLight intensity={6} position={[0,.9,-.12]} color="DarkGreen" decay={6}/> */}
        {/* <pointLight intensity={4} position={[.5,2,2]} color="gold" decay={2}/> */}
        <Suspense fallback={<Loader/>}>
          <NightSky position={[0,8,1]}/>
          <Island2
          position= {[0, 0, 0]}
          scale={[1.75,1.75,1.75]}
          rotation={[0,-1,0]}/>
        </Suspense>
        <OrbitControls rotateSpeed={.6} enableDamping={true} dampingFactor={0.02} makeDefault={true} enableZoom={true}
            maxPolarAngle={Math.PI - Math.PI / 1.5}  minDistance={5} maxDistance={10}>
            
        </OrbitControls>
      </Canvas>
    </section>
  )
}

export default Projects