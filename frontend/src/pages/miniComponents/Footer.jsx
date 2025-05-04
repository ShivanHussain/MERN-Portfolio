/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="p-5 mt-6 w-full max-w-[1050px] mx-auto">
     <hr className="" />

     <h1 className="text-tubeLight-effect text-3xl mt-5  justify-center tracking-[8px] ">Shivan &copy; {year}</h1>
    </footer>


  
  );
};

export default Footer;
