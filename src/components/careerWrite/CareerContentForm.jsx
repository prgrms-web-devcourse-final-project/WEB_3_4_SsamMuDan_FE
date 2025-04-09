import { Input } from '@/components/ui/input';
import IntroduceInput from '../common/IntroduceInput';
import StackBadge from '@/common/StackBadge';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/outline';
import IntroduceTextArea from '../common/IntroduceTextArea';
import { Button } from '@/components/ui/button';
import getSkillStack from '@/api/careerWrite/getSkillStack';

import { useState, useEffect } from 'react';

const CareerContentForm = ({ onCareerChange, onDelete, canDelete }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [techStackOptions, setTechStackOptions] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [introduction, setIntroduction] = useState('');

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

  useEffect(() => {
    if (onCareerChange) {
      onCareerChange({
        companyName: company,
        position: position,
        careerDescription: introduction,
        techStackIds: selectedSkill.map((item) => item.id),
      });
    }
  }, [company, position, introduction, selectedSkill]);

  const selectSkill = (skill) => {
    setSelectedSkill((prev) => {
      if (prev.some((item) => item.name === skill.name)) return prev;
      return [...prev, skill];
    });
    setQuery('');
    setSuggestions([]);
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkill((prev) => prev.filter((item) => item.name !== skillToRemove.name));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveSuggestionIndex((prev) => (prev + 1 >= suggestions.length ? 0 : prev + 1));
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestionIndex((prev) => (prev - 1 < 0 ? suggestions.length - 1 : prev - 1));
    } else if (e.key === 'Enter') {
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
        selectSkill(suggestions[activeSuggestionIndex]);
      }
      e.preventDefault();
    }
  };

  return (
    <div className="w-[800px] flex flex-col gap-[50px]">
      {/* 회사이름 */}
      <div className="relative w-[800px] pt-[4px] h-[45px] border-b">
        <Input
          type="text"
          placeholder="회사이름을 입력해주세요"
          className="focus-visible:ring-0 text-grey400 px-0 py-0 border-none shadow-none placeholder:text-grey400 placeholder:text-[20px]"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <Button
          variant="outline"
          className={`absolute top-0 right-0 ${canDelete ? 'bg-primary300 hover:bg-primary300' : 'bg-grey300 hover:bg-grey300'} `}
          onClick={canDelete ? onDelete : ''}
        >
          <TrashIcon className="w-[25px] text-white" />
        </Button>
      </div>

      {/* 직무 */}
      <div>
        <div className="text-[22px] font-medium mb-2">직무</div>
        <IntroduceInput
          width="800px"
          height="60px"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      {/* 기술스택 */}
      <div className="flex flex-col gap-6">
        <div className="font-medium text-[20px]">기술스택</div>
        <div className="flex flex-wrap items-center gap-6">
          {selectedSkill.map((item, index) => (
            <StackBadge
              key={index}
              text={item.name}
              showCloseIcon={true}
              onClose={() => removeSkill(item)}
            />
          ))}
        </div>
        <div className="relative">
          <Input
            className="px-14 h-[60px] bg-grey100 placeholder:text-grey400 placeholder:text-[20px] focus-visible:ring-0"
            placeholder="보유한 기술 스택을 입력해 주세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <MagnifyingGlassIcon className="absolute top-[20px] left-[20px] w-[20px]" />
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
        <div className="text-[22px] font-medium mb-2">주요성과 및 업무</div>
        <IntroduceTextArea
          width="800px"
          height="170px"
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CareerContentForm;
