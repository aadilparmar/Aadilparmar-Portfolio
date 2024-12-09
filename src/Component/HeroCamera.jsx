import { useFrame } from "@react-three/fiber";
import React, { useRef ,useEffect } from "react";
import { easing } from "maath";
const HeroCamera = ({ children, isSmall }) => {
  

  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 5], 0.5, delta);
    if(!isSmall){
        easing.dampE(
            groupRef.current.rotation,
            [-state.pointer.y / 3, state.pointer.x / 5, 0],
            0.01,
            delta
          );
    }
  });
  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
