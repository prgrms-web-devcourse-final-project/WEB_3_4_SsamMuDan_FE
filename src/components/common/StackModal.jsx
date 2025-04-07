import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input } from '@/components/ui/input';
import PrimaryButton from './PrimaryButton';
import { Button } from '@/components/ui/button';
import StackBadge from '@/common/StackBadge';
import { useState, useEffect } from 'react';
import getSkillStack from '@/api/careerWrite/getSkillStack';

const StackModal = ({ onSelect }) => {
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [techStackOptions, setTechStackOptions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        const response = await getSkillStack();
        setTechStackOptions(response);
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

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && activeSuggestionIndex >= 0) {
      e.preventDefault();
      selectSkill(suggestions[activeSuggestionIndex]);
    }
  };

  const selectSkill = (tech) => {
    if (!selectedSkill.some((skill) => skill.id === tech.id)) {
      setSelectedSkill((prev) => [...prev, tech]);
      setQuery('');
      setSuggestions([]);
      setActiveSuggestionIndex(-1);
    }
  };

  const removeSkill = (tech) => {
    setSelectedSkill((prev) => prev.filter((skill) => skill.id !== tech.id));
  };

  const handleApply = () => {
    onSelect(selectedSkill);
  };

  return (
    <Dialog>
      <DialogTrigger className="flex flex-row items-center font-bold text-[24px] gap-4">
        <div className="flex flex-row items-center gap-4">
          <span className="font-bold text-[24px]">기술 스택</span>
          <div className="w-[30px] h-[30px] flex flex-row items-center justify-center border border-solid rounded-[10px]">
            <ChevronDownIcon className="w-[20px]" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="w-[600px] max-w-none flex flex-col border border-gray-300 rounded-lg">
        <span className="font-bold text-[20px]">기술스택</span>
        <div className="relative">
          <Input
            className="px-14 h-[45px] bg-grey100 relative !text-[16px] placeholder:text-[16px] focus-visible:ring-0"
            placeholder="보유한 기술 스택을 입력해 주세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <MagnifyingGlassIcon className="w-[20px] absolute top-[12px] left-[20px]" />
          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-200 mt-2 rounded shadow">
              {suggestions.map((tech, index) => (
                <div
                  key={tech.id}
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

        {/* Quick selection chips */}
        <div className="w-full mt-6">
          <span className="text-sm text-gray-500">가장 많이 선택하는 기술</span>
          <div className="w-full flex flex-wrap gap-2 mt-2">
            {techStackOptions.slice(0, 8).map((tech) => (
              <button
                key={tech.id}
                onClick={() => {
                  if (selectedSkill.some((skill) => skill.id === tech.id)) {
                    removeSkill(tech);
                  } else {
                    selectSkill(tech);
                  }
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                  selectedSkill.some((skill) => skill.id === tech.id)
                    ? 'bg-primary300 text-white border-primary300'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <img src={tech.imageUrl} alt={tech.name} className="w-5 h-5" />
                <span className="text-sm">{tech.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full h-[300px] overflow-y-auto mt-8">
          <div className="w-full border-t border-gray-200 pt-6">
            <div className="w-full flex flex-wrap gap-3 items-start justify-start">
              {selectedSkill.map((tech) => (
                <StackBadge
                  key={tech.id}
                  text={tech.name}
                  showCloseIcon={true}
                  onClose={() => removeSkill(tech)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center gap-3 mt-6">
          <Button
            className="w-[140px] h-[48px] text-[16px] hover:bg-white hover:text-black"
            variant="outline"
            onClick={() => {
              setSelectedSkill([]);
            }}
          >
            초기화
          </Button>
          <PrimaryButton text="적용" width="400px" height="48px" onClick={handleApply} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StackModal;
