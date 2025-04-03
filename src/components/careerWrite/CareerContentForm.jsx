import { Input } from '@/components/ui/input';
import IntroduceInput from '../common/IntroduceInput';
import StackBadge from '@/common/StackBadge';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/outline';
import IntroduceTextArea from '../common/IntroduceTextArea';
import { Button } from '@/components/ui/button';
import getSkillStack from '@/api/careerWrite/getSkillStack';

import { useState, useEffect } from 'react';
const CareerContentForm = () => {
  // 입력값 상태
  const [query, setQuery] = useState('');
  // 추천 검색어 상태
  const [suggestions, setSuggestions] = useState([]);
  // API에서 받아온 기술 스택 옵션
  const [techStackOptions, setTechStackOptions] = useState([]);
  // 선택된 기술 스택을 저장하는 상태
  const [selectedSkill, setSelectedSkill] = useState([]);

  // 추천 목록에서 현재 활성화(하이라이트)된 항목의 인덱스
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  // 컴포넌트가 마운트될 때, 기술 스택 옵션을 비동기로 불러옵니다.
  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        const options = await getSkillStack();
        setTechStackOptions(options);
      } catch (error) {
        console.error('Error fetching tech stack options:', error);
      }
    };

    fetchTechStack();
  }, []);

  // 입력(query)이 바뀔 때마다 추천 검색어(suggestions)를 업데이트합니다.
  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }
    const filtered = techStackOptions.filter((tech) =>
      tech.name.toLowerCase().includes(query.toLowerCase()),
    );
    setSuggestions(filtered);
  }, [query, techStackOptions]);

  // 추천 검색어 클릭 시, 해당 스킬을 선택 목록에 추가하고 추천 목록과 입력값을 초기화합니다.
  const selectSkill = (skill) => {
    setSelectedSkill((prev) => {
      // 중복 방지 (이미 선택된 경우 추가하지 않음)
      if (prev.some((item) => item.name === skill.name)) {
        return prev;
      }
      return [...prev, skill];
    });
    // 추천 목록과 입력창 초기화
    setQuery('');
    setSuggestions([]);
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkill((prev) => prev.filter((item) => item.name !== skillToRemove.name));
  };

  // Input에 방향키 및 엔터 키 이벤트 핸들러 추가
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // 아래 화살표: 활성화 인덱스를 다음 항목으로 이동 (wrap-around)
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex + 1 >= suggestions.length ? 0 : prevIndex + 1,
      );
    } else if (e.key === 'ArrowUp') {
      // 위 화살표: 활성화 인덱스를 이전 항목으로 이동 (wrap-around)
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex - 1 < 0 ? suggestions.length - 1 : prevIndex - 1,
      );
    } else if (e.key === 'Enter') {
      // 엔터: 활성화된 항목이 있으면 선택
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
        selectSkill(suggestions[activeSuggestionIndex]);
      }
      // 기본 엔터 동작 방지
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="w-[800px] flex flex-col gap-[50px]">
        {/* 회사이름 */}
        <div className="relative w-[800px] pt-[4px] h-[45px] border-b  ">
          <Input
            type="text"
            placeholder="회사이름을 입력해주세요"
            className="focus-visible:ring-0 text-grey400 px-0 py-0 border-none shadow-none placeholder:text-grey400 placeholder:text-[20px]"
          />

          <Button variant="outline " className="absolute top-0 right-0 bg-primary300">
            <TrashIcon className="w-[25px] text-white" />
          </Button>
        </div>
        {/* 직무 */}
        <div>
          <div className="text-[22px] font-medium mb-2">직무</div>
          <IntroduceInput width="800px" height="60px" />
        </div>

        {/* 기술스택 */}
        <div className="flex flex-col gap-6">
          <div className="font-medium text-[20px] ">기술스택</div>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap items-center gap-6">
              {selectedSkill.length > 0 &&
                selectedSkill.map((item, index) => (
                  <StackBadge
                    key={index}
                    text={item.name}
                    showCloseIcon={true}
                    onClose={() => removeSkill(item)}
                  />
                ))}
            </div>
          </div>
          <div className="relative ">
            <Input
              className="px-14 h-[60px] bg-grey100 relative placeholder:text-grey400 placeholder:text-[20px] focus-visible:ring-0"
              placeholder="보유한 기술 스택을 입력해 주세요"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <MagnifyingGlassIcon className="absolute top-[20px] left-[20px] w-[20px] " />
            {/* 추천 검색어 드롭다운 */}
            {suggestions.length > 0 && (
              <div className="absolute z-10 w-full bg-white border border-gray-200 mt-2 rounded shadow">
                {suggestions.map((tech, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 cursor-pointer ${
                      index === activeSuggestionIndex ? 'bg-gray-100' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => selectSkill(tech)}
                  >
                    <div className="flex flex-row items-center">
                      <img src={tech.imageUrl} alt={tech.name} className="w-6 h-6 mr-2" />
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 자기소개 */}
        <div>
          <div className="text-[22px] font-medium mb-2">자기소개</div>
          <IntroduceTextArea width="800px" height="170px" />
        </div>
      </div>
    </>
  );
};

export default CareerContentForm;
