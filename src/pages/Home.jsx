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
    <div className="mb-28 h-[400px] w-full sm:mb-0 md:h-screen">
      <div className="mx-auto mt-40 flex w-[90%] flex-col items-center sm:flex-row lg:mt-32 lg:w-[80%] lg:justify-between  ">
        <div className="w-full">
          <h2 className="pb-10 text-2xl font-semibold leading-tight text-gray-900 lg:text-3xl">
            Happy Birthday Sarah!!!
          </h2>
          <h2 className="pb-10 pt-2 text-2xl font-semibold leading-tight text-gray-900">
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
