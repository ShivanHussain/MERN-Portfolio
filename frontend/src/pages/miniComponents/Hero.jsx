/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Linkedin, Instagram, Facebook, Twitter, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import SpecialLoadingButton from "./SpecialLoadingButton";

const Hero = () => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://mern-stack-portfolio-backend-bf3p.onrender.com/api/v1/user/portfolio/me",
          { withCredentials: true }
        );
        setUser(data.user[0]);
        //console.log("User data:", data.user[0]);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getMyProfile();
  }, []);

  if (!user) {
    return <SpecialLoadingButton width={"70"}content={"Loading profile..."}/>;
  }

  return (
    <div className="w-full">
      <h1 className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4">
        Hey, I'm {user.name || "Shivan Hussain"}
      </h1>

      <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]">
        <Typewriter
          words={["FULLSTACK DEVELOPER", "Backend DEVELOPER","SOFTWARE DEVELOPER"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      <div className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 items-center mt-4 md:mt-8 lg:mt-10">
        {user.linkedInURL && (
          <Link to={user.linkedInURL} target="_blank">
            <Linkedin className="text-sky-500 w-7 h-7" />
          </Link>
        )}
        {user.instagramURL && (
          <Link to={user.instagramURL} target="_blank">
            <Instagram className="text-pink-500 w-7 h-7" />
          </Link>
        )}
        {user.facebookURL && (
          <Link to={user.facebookURL} target="_blank">
            <Facebook className="text-blue-800 w-7 h-7" />
          </Link>
        )}
        {user.twitterURL && (
          <Link to={user.twitterURL} target="_blank">
            <Twitter className="text-blue-800 w-7 h-7" />
          </Link>
        )}
      </div>

      <div className="mt-4 md:mt-8 lg:mt-10 flex gap-3">
        {user.githubURL && (
          <Link to={user.githubURL} target="_blank">
            <Button className="rounded-[30px] flex items-center gap-2 flex-row">
              <Github />
              <span>Github</span>
            </Button>
          </Link>
        )}
        {user.resume?.url && (
          <Link to={user.resume.url} target="_blank">
            <Button className="rounded-[30px] flex items-center gap-2 flex-row">
              <ExternalLink />
              <span>Resume</span>
            </Button>
          </Link>
        )}
      </div>
      
    </div>
  );
};

export default Hero;


