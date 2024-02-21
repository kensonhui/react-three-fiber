import { useEffect, useRef } from "react";

import miningTown from "../assets/3d/mining_town.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
const MiningTown = ({ ...props }) => {
  const { scene, animations } = useGLTF(miningTown);
  const { ref, names, actions } = useAnimations(animations);

  useEffect(() => {
    // actions["Take 001"].play();
    console.log(actions), [];
  });
  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default MiningTown;
