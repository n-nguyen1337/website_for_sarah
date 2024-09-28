import React from "react";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import imagedeveloper from "../Assets/images/kittyfrontpage.png";

function Home() {
  
  return (
    <div className="mb-28 h-[500px] w-full sm:mb-0 md:h-[800px]">
      <div className="mx-auto mt-40 flex w-[90%] flex-col items-center sm:flex-row lg:mt-32 lg:w-[80%] lg:justify-between  ">
        <div className="w-full">
          <h2 className="pb-10 text-9xl font-medium leading-tight text-rose-500 lg:text-8xl">
            Happy Birthday Sarah!!!
          </h2>
          <h2 className="pb-10 pt-2 text-7xl font-medium leading-tight text-rose-500">
            {UserData.name}
          </h2>
          <TypewriterText />

          
        </div>

        <div className="mt-20 lg:mt-12">
          <img
            className="max-w[550px] bg-cover bg-center bg-no-repeat lg:h-[400px] lg:w-[600px]"
            src={imagedeveloper}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
