import React from "react";
import { UserData } from "../data/UserData";
import Marquee from "react-fast-marquee";
import { foodData } from "../data/FoodData";
import { foodImage } from "../utils/FoodImage";
import AboutImage from "../Assets/images/aboutcat.png";

function About() {
  const { about } = UserData;
  return (
    <div className="mb-24 h-[400px] w-full sm:mb-0 md:h-screen">
      <div className="mx-auto flex w-[90%] flex-col justify-between rounded-lg bg-transparent p-4 shadow-lg md:flex-row md:items-center">
        <div className="flex w-full flex-col md:w-[50%]">
          <p className="pb-2 text-2xl font-semibold tracking-wide text-gray-900">
            First things first, happy birthday to my exceptional girlfriend
          </p>
        
          <p className="pb-2 text-2xl font-semibold tracking-wide text-gray-900">
            You are so beautiful inside and out
          </p>
          <p className="font-poppins text-sm lg:text-base">{about}</p>
          <div className="mt-8">
            <Marquee
              gradient={false}
              speed={100}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              {foodData.map((food, id) => (
                <div
                  className="ml-4 flex h-24 w-24 flex-col items-center justify-center gap-2"
                  key={id}
                >
                  <img
                    className="h-[50px] w-[60px] bg-contain bg-no-repeat"
                    src={foodImage(food)}
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
