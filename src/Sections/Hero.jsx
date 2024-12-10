import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../Component/HackerRoom";
import CanvasLoader from "../Component/CanvasLoader";
import {useMediaQuery} from "react-responsive"
import { calculateSizes } from "../Constants";
import ReactLogo from "../Component/ReactLogo";
import Cube from "../Component/Cube";
import Rings from "../Component/Rings";
import HeroCamera from "../Component/HeroCamera";
import Button from "../Component/Button";
const Hero = () => {
  const isMobile= useMediaQuery({maxWidth:768});
  const isSmall=useMediaQuery({maxWidth:350});
  const isTablet=useMediaQuery({minWidth:768,maxWidth:1024});

  const sizes= calculateSizes(isSmall,isTablet,isMobile);
  
  return (
    <section className="min-h-screen w-full flex flex-col-relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Aadil<span className='waving-hand'>👋</span>
        </p>
        <p className="hero_tag text-gray-300">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full ">
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefualt position={[0, 0, 30]} />
            <HeroCamera isSmall={isSmall}>
            <HackerRoom
              position={isMobile ? [0.1,-1, 0] : [0.25, -1.7, 0]}
              rotation={[0,-Math.PI,0]}
              scale={ isSmall ? 0.05 : isMobile ? 0.02 : 0.022}
            />
            </HeroCamera> 
            <group>
              <ReactLogo position={isSmall ? [0.1,10, 0.18102] : isMobile ? [1, 1, 1] : isTablet ? [1, 1,0] : [3, 1, 0]}/>
               <Cube position={isSmall ? [1, -0.5, 1] : isMobile ? [1, -0.5, 1] :isTablet ? [1, 1,0] : [5, -0.9, 0]}/>
               <Rings  />
            </group>
            <ambientLight position={[1,1,1]}intensity={0.5} />
            <directionalLight  position={[1,3.4,4]}intensity={1.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href="contact" className="w-fit">
          <Button name="Let's Connect Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
