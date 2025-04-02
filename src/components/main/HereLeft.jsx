import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const HeroLeft = () => {
  const [currentSentence, setCurrentSentence] = useState(0);

  const sentenceList = [
    {
      mainUpper: `혼자서 공부 할 필요 없어 
      다 같이 즐기면서 공부하자! `,
      sub: '사이드 프로젝트 팀원들과 즐겁게 만들어보자',
    },
    {
      mainUpper: '혼자서 공부 할 필요 없어 다 같이 즐기면서 공부하자2 ',
      sub: '사이드 프로젝트 팀원들과 즐겁게 만들어보자2',
    },
    {
      mainUpper: '혼자서 공부 할 필요 없어 다 같이 즐기면서 공부하자 3',
      sub: '사이드 프로젝트 팀원들과 즐겁게 만들어보자3',
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-end w-[690px] h-full ">
        <div className="flex flex-col justify-between h-[427px]">
          {/* 제목 */}
          <div className="w-full flex flex-col   ">
            <div className="text-[50px] font-bold whitespace-pre-line">
              {sentenceList[currentSentence].mainUpper}
            </div>
            <div className="text-[25px] text-grey300 font-[400] mt-[40px]">
              {sentenceList[currentSentence].sub}
            </div>
          </div>
          {/* 페이지네이션 */}
          <div className="w-[108px] h-[44px] p-[10px] flex items-center  rounded-[30px] bg-grey300  p-[20px] justify-around">
            <div className="text-[20px] text-white">1</div>
            <div className="text-[20px] text-grey200">/ 3</div>
            <ChevronRightIcon className="w-[20px] text-white hover:cursor-pointer ml-[15px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLeft;
