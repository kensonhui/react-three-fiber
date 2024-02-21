import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import MiningTown from "../models/MiningTown";

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
    screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 760) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [screenScale, screenPosition, rotation] = audjustIslandForScreenSize();
  const [planeScale, planePosition] = audjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
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
          <Sky isRotating={isRotating} />
          {/* <Island
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          /> */}
          <MiningTown position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} />
          <Bird />
          <Plane
            planePosition={planePosition}
            planeScale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
