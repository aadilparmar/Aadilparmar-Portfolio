import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../Component/Button";
const About = () => {
    const [hasCopied,setHasCopied]=
    useState(false);


    const handleCopy=()=>{
        navigator.clipboard.writeText('aadilpar74@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
           setHasCopied(false); 
        },2000);
    }

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> Hello&nbsp;,&nbsp;I'm Aadil</p>
              <p className="grid-subtext">
                With 30+ Advanced project experiences , I have honed my skills
                in frontend and backend development , with a focus on animated
                3D websites.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container justify-center items-center">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext ">Tech Stack</p>
              <p className="grid-subtext">
                I am a seasoned JavaScript/TypeScript developer with a keen
                focus on the React and Next.jsecosystems. My expertise lies in
                crafting robust, scalable, and efficient web applications using
                modern front-end technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container  ">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[{
                //     lat:20.5937,lng:78.9629,
                //     Text:"I'm Here",
                //     color:'green',
                //     size:10
                // }]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work Remotely across all the TimeZones{" "}
              </p>
              <p className="grid-subtext mt-2">
                I'm based in Gujarat,India with the remote work available
              </p>
              <Button
                name={"Contact Me"}
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
            <p className="grid-headtext">Passion = Coding 😊 </p>
            <p className="grid-subtext">
              Love Solving Problems , Building new things and exploring and
              learing new things through code. Coding isn't just my profession -
              it's my passion.
            </p>
          </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
                <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain" />
                <div className="space-y-2">
                    <p className="grid-subtext text-center font-bold text-xl hover:text-white transition-colors">Contact Me</p>
                    <div className="copy-container" onClick={handleCopy}>
                        <img src={hasCopied?'assets/tick.svg':'assets/copy.svg'} alt="copy" />
                        <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>aadilpar74@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
