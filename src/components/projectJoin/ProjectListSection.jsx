import ProjectCard from './ProjectCard';
const ProjectCardListSection = () => {
  return (
    <div className="w-[1246px] mx-auto flex flex-wrap justify-between   ">
      {Array(16)
        .fill(null)
        .map((_, index) => (
          <ProjectCard key={index} />
        ))}
    </div>
  );
};

export default ProjectCardListSection;
