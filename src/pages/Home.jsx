import { useEffect, useState, useRef } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import MiningTown from "../models/MiningTown";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const audjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 760) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };
  const audjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    screenPosition = [0, 6.5, 5];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 760) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [5, 5, 5];
      screenPosition = [0, -4, -100];
    }

    return [screenScale, screenPosition];
  };

  const [currentStage, setCurrentStage] = useState();
  const [screenScale, screenPosition, rotation] = audjustIslandForScreenSize();
  const [planeScale, planePosition] = audjustPlaneForScreenSize();
  const skyRef = useRef();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-cemter justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Sky skyRef={skyRef} isRotating={isRotating} />
          {/* <Island
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          /> */}
          <MiningTown
            position={[0, -0.3, 2.7]}
            scale={[0.1, 0.1, 0.1]}
            rotation={[0.1 * Math.PI, 0 * Math.PI, 0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            skyRef={skyRef}
          />
          <Bird />
          {/* <Plane
            planePosition={planePosition}
            planeScale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          /> */}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
