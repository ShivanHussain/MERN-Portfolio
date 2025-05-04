/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">


      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          <span className="text-tubeLight-effect font-extrabold">ABOUT  ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>


      <div className="text-center">
        <p className="uppercase text-xl text-slate-400 style={{ fontFamily: 'Poppins, sans-serif' }}">
          Allow me to introduce myself.
        </p>
      </div>

      <div>
        <div className="my-8 sm:my-20 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex flex-col tracking-[0.5px] text-base text-slate-300 sm:text-lg md:text-xl gap-5  style={{ fontFamily: 'Poppins, sans-serif' }}">
            <p>
            My name is Shivan Hussain, and I am currently pursuing a degree in Computer Science and Engineering at SRMS, 
            with an expected graduation around 2026. In my leisure time, I enjoy immersing myself in films and television 
            series, as well as engaging in video gaming as a favorite pastime.
              
        
            </p>
            <p>
            Motivated Full-stack MERN developer with expertise in building clean user interactive web applications using React, Express, Redux, 
            JavaScript. Skilled in delivering high-quality innovative solutions and technical support through collaboration and coordination with 
            cross functional teams to gather and analyze requirement to meet project goals. Committed to continuous improvement of technical 
            skills and staying updated on industry trends leading to optimal results.
            </p>



            <p>
              My dedication and perseverance in timely delivery of work are integral
              to me. I maintain the courage to face any challenges for extended
              periods.
            </p>
          </div>

        </div>


      </div>


    </div>
  );
};

export default About;
