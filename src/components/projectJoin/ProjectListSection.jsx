import ProjectCard from './ProjectCard';
import { useState, useEffect } from 'react';

const ProjectCardListSection = ({ data }) => {
  // console.log(data);
  return (
    <div className="w-[1246px] mx-auto flex flex-wrap justify-between   ">
      {data.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProjectCardListSection;
