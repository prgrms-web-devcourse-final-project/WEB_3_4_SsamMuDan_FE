import HotProjectCard from './HotProjectCard';
import getHotProject from '@/api/projectJoin/getHotProject';
import { useState, useEffect } from 'react';

const HotProject = () => {
  const [hotProject, setHotProject] = useState([]);

  const fetchHotProject = async () => {
    const hotProject = await getHotProject();
    setHotProject(hotProject);
  };

  useEffect(() => {
    fetchHotProject();
  }, []);
  return (
    <>
      <div className="w-[1246px] h-[449px] mx-auto mt-[146px]">
        {/* 제목 */}
        <div className="h-[36px] text-[30px] font-[400] ">가장 HOT한 프로젝트</div>
        <div className="w-full flex justify-between mt-[27px]">
          {hotProject.map((item) => (
            <HotProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HotProject;
