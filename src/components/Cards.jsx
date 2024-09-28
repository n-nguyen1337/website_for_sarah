import React, { useState } from "react";
import { ProjectsList } from "../data/ProjectsList";

function Cards() {
  const [showFullDescription, setShowFullDescription] = useState(null);
  const projectsToDisplay = ProjectsList.projects.slice(0, 6);

  const toggleDescription = (index) => {
    console.log("clicking description", index);

    setShowFullDescription(index === showFullDescription ? null : index);
  };

  return (
    <>
      {projectsToDisplay.map((project, index) => (
        <div
          key={index}
          className="mb-8 h-auto rounded-lg bg-transparent p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <h2 className="font-poppins mb-5 cursor-pointer text-base font-normal lg:text-3xl">
            {project.name}
          </h2>
          <p className="font-poppins text-large text-violet-500">
            {showFullDescription === index
              ? project.description
              : project.description.substring(0, 300)}
        
          </p>
      
        </div>
      ))}
    </>
  );
}

export default Cards;
