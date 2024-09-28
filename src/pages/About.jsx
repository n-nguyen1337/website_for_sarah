import React from "react";
import { UserData } from "../data/UserData";
import Marquee from "react-fast-marquee";
import { traitData } from "../data/TraitData";
import { traitImage } from "../utils/TraitImage";
import AboutImage from "../Assets/images/aboutcat.png";

function About() {
  const { about } = UserData;
  return (
    <div className="mb-24 h-[350px] w-full sm:mb-0 md:h-[600px]">
      <div className="mx-auto flex w-[90%] flex-col justify-between rounded-lg bg-transparent p-4 shadow-lg md:flex-row md:items-center">
        <div className="flex w-full flex-col md:w-[50%]">
          <p className="pb-10 text-2xl font-semibold tracking-wide text-violet-500	">
          WOOHOO WE CELEBRATIN THE COOLEST PERSON EVER
          </p>
          <p className="font-poppins text-sm lg:text-base text-violet-500	 ">{about}</p>
          <div className="mt-8">
            <Marquee
              gradient={false}
              speed={200}
              pauseOnClick={false}
              delay={0}
              play={true}
              direction="right"
            >
              {traitData.map((food, id) => (
                <div
                  className="ml-4 flex h-24 w-24 flex-col items-center justify-center gap-2 text-violet-500	"
                  key={id}
                >
                  <img
                    className="h-[50px] w-[60px] bg-contain bg-no-repeat"
                    src={traitImage(food)}
                    alt={food}
                  />
                  <p>{food}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <img
          className="max-w[500px] mt-4 bg-cover bg-center bg-no-repeat md:w-[350px] lg:mt-0 lg:h-[400px] lg:w-[500px]"
          src={AboutImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
