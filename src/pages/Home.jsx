import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
import Island2 from '../models/pirate-island'
import NightSky from '../models/NightSky'
import { OrbitControls } from '@react-three/drei'

const Home = () => {
  const [isRotating, setRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const adjustIslandScreenSize = ()=> {
    let screenScale = null
    let ScreenPosition = [0, -6.5, -12]
    let rotation = [0.1, 4.7, 0]
    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9],
      ScreenPosition = [0, -6.5, -12]
    } else {
      screenScale = [1, 1, 1]
    }
    return [ screenScale, ScreenPosition, rotation]
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandScreenSize()

  const adjustPlaneScreenSize = ()=> {
    let screenScale = null
    let ScreenPosition = null
    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5],
      ScreenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      ScreenPosition = [0, -4, -4]
    }
    return [ screenScale, ScreenPosition]
  }
  const [planeScale, planePosition] = adjustPlaneScreenSize()
  return (
    <section className=" w-full h-screen relative night-color">
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">
        {/* {currentStage && <HomeInfo currentStage={currentStage} />} */}
      </div>
      <Canvas 
      className={`w-full h-screen ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{
        position: [0, 4, 6.5],
        fov: 75,
        near: 0.1,
        far: 100
      }}>
        <Suspense fallback={<Loader />}>
          {/* <Sky isRotating={isRotating} /> */}
          {/* <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setRotating={setRotating}
          setCurrentStage={setCurrentStage}
          /> */}
          <directionalLight intensity={3} position={[0,10,4]}/>
          <NightSky position={[0,8,1]}/>
          <Island2
          position= {[0, 0, 0]}
          scale={[1.75,1.75,1.75]}
          rotation={[0,-1,0]}
          isRotating={isRotating}
          setRotating={setRotating}
          setCurrentStage={setCurrentStage}
          />
        
        <OrbitControls rotateSpeed={.6} enableDamping={true} dampingFactor={0.02} makeDefault={true} enableZoom={true}
            maxPolarAngle={Math.PI - Math.PI / 1.5}  minDistance={5} maxDistance={10}>
            
        </OrbitControls>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home