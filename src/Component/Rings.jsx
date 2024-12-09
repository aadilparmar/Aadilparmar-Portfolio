import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef } from "react";
import {useMediaQuery} from "react-responsive"

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmall = useMediaQuery({ maxWidth: 350 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const texture = useTexture("textures/rings.png");

  useGSAP(
    () => {
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          }
        );
    },
    {
      dependencies: position,
    }
  );

  return (
    <Center position={isSmall ? [1, -0.5, 1] : isMobile ? [-1.2,1.8,0] :isTablet ? [-1, 1,0] : [-3, .5, 0]}>
      <group scale={0.16}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
