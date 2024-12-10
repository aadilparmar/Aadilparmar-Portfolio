import React, { Suspense } from "react";
import { myProjects } from "../Constants";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Component/CanvasLoader";
import DemoComputer from "../Component/DemoComputer";
const Projects = () => {
  const projectCount = myProjects.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section className="c-space my-20">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit roundeed-lg "
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className=" animatedText">{currentProject.desc}</p>
            <p className=" animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between felx-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              className="flex items-center gap-2 cursor-pointer text-white-600"
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="right-arrow"
                className="w-4 h-4 "
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4 "
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-gray-900 rounded-lg h-96 md:h-full">
              <Canvas>
                <ambientLight intensity={Math.PI}/>
                <directionalLight position={[10,10,5]}/>
                <Center>
                  <Suspense fallback={<CanvasLoader/>}>
                    <group scale={1.9} position={[1,-1,0]} rotation={[0,-0.1,0]}>
                      <DemoComputer texture={currentProject.text}/>
                    </group>
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={true}/>
              </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
