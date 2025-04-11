import { useEffect, useState } from 'react';
import JoinCard from './JoinCard';
import PrimaryButton from '../common/PrimaryButton';
import { Link } from 'react-router-dom';
import getProjectPostsMain from '@/api/main/getProjectPostsMain';

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjectPostsMain();
        setProjects(res);
      } catch (error) {
        console.error('❌ HOT 프로젝트 조회 실패:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="text-[25px] font-esamanru w-[1246px] mx-auto ">🔥 프로젝트 같이 하자!</div>

      <div className="relative w-full mx-w-[1920px] h-[800px] mx-auto overflow-hidden">
        {/* 배경이미지 */}
        <img
          src="/images/main/main-greenblur.svg"
          alt=""
          className="absolute left-[-500px] top-[-100px]"
        />
        <img
          src="/images/main/main-redblur.svg"
          alt=""
          className="absolute right-[-500px] top-[-50px]"
        />

        <div className="flex flex-col w-[1246px] h-[493px] absolute top-[80px] left-1/2 -translate-x-1/2 text-black">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="mb-5">
              <JoinCard project={project} />
            </div>
          ))}
          <Link to="/projectJoin">
            <PrimaryButton text="더보기" width="1240px" height="63px" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
