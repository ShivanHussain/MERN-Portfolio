/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Singleproject from "./Singleproject";

const Projects = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-bf3p.onrender.com/api/v1/project/getall",
        { withCredentials: true }
      );
      setProjects(data.projects);
    };
    getMyProjects();
  }, []);
  return (
    <div>
      <div className="relative mb-12">
        <h1
          className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] 
          mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >

          <span className="text-tubeLight-effect font-extrabold">
            MY{" "}
            Projects
          </span>
        </h1>
        <h1
          className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
          tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY <span className="text-tubeLight-effect font-extrabold">WORK</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      

        {
          viewAll ? projects && projects.map((item) => (

            <Singleproject key={item._id} item={item}/>

        )): projects && projects.slice(0,6).map((item)=>(
            
            <Singleproject key={item._id} item={item} />

        ))}
      </div>
      {projects && projects.length > 6 && (
        <div className="w-full text-center my-9">
          <button className="w-52 bg-blue-500 hover:bg-blue-700 my-4 mx-[1px] p-2 rounded-md" onClick={()=>setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}




    </div>
  );

}

export default Projects;


{/**/ }
