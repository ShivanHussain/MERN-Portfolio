/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "./miniComponents/Hero";
import Education from "./miniComponents/Education";
import Skills from "./miniComponents/Skills";
import MyApps from "./miniComponents/MyApps";
import About from "./miniComponents/About";
import { ThemeProvider } from "@/components/theme-provider";
import Project from "./miniComponents/Projects";
import Contact from "./miniComponents/Contact";

const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <Hero />
      <Education />
      <About />
      <Skills />
      <Project />
      <Contact />
    </article>
  );
};

export default Home;
