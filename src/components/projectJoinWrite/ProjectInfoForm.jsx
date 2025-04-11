import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import IntroduceInput from '../common/IntroduceInput';
import IntroduceTextArea from '../common/IntroduceTextArea';
import StackBadge from '@/common/StackBadge';
import PositionSetting from './PositionSetting';
import ProjectPeriod from './ProjectPeriod';
import PrimaryButton from '../common/PrimaryButton';
import { useState, useEffect } from 'react';
import getSkillStack from '@/api/careerWrite/getSkillStack';
import getPosition from '@/api/projectJoin/getPosition';
import postProject from '@/api/projectJoinWrite/postProject';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProjectInfoForm = () => {
  const navigate = useNavigate();
  // 이미지
  const [imageUrl, setImgUrl] = useState('');
  const [postImgUrl, setPostImgUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // 미리보기용 URL 생성
      const previewUrl = URL.createObjectURL(file);
      setImgUrl(previewUrl);
      setPostImgUrl(file); // 실제 파일 객체 저장
    }
  };

  const [postData, setPostData] = useState({
    projectName: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
    isWorking: false,
    projectContact: '',
    techStackIds: [],
    positions: [],
  });

  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectContact, setProjectContact] = useState('');
  const [qualifications, setQualifications] = useState([]);
  const [qualificationInput, setQualificationInput] = useState('');

  // 기술스택 관련 상태
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [techStackOptions, setTechStackOptions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  // 모집 분야 (직무) 관련 상태
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [positionOptions, setPositionOptions] = useState([]);
  const [isPositionPopoverOpen, setIsPositionPopoverOpen] = useState(false);

  // 기술스택 옵션 불러오기
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

  // 모집 분야(직무) 옵션 불러오기
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const options = await getPosition();
        setPositionOptions(options);
      } catch (error) {
        console.error('Error fetching position options:', error);
      }
    };
    fetchPositions();
  }, []);

  // 입력값이 바뀔 때마다 추천 검색어 업데이트
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

  // 기술스택 선택 함수
  const selectSkill = (skill) => {
    setSelectedSkill((prev) => {
      // 중복 방지
      if (prev.some((item) => item.name === skill.name)) {
        return prev;
      }
      return [...prev, skill];
    });
    setQuery('');
    setSuggestions([]);
  };

  // 기술스택 제거 함수
  const removeSkill = (skillToRemove) => {
    setSelectedSkill((prev) => prev.filter((item) => item.name !== skillToRemove.name));
  };

  // 키보드 이벤트 처리
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

  const handleDateChange = (dateInfo) => {
    setPostData((prev) => ({
      ...prev,
      startDate: dateInfo.startDate,
      endDate: dateInfo.endDate,
      isWorking: dateInfo.isWorking,
    }));
  };

  // 지원자격 추가 함수
  const addQualification = () => {
    if (qualificationInput.trim() && !qualifications.includes(qualificationInput.trim())) {
      setQualifications([...qualifications, qualificationInput.trim()]);
      setQualificationInput('');
    }
  };

  // 지원자격 삭제 함수
  const removeQualification = (index) => {
    setQualifications(qualifications.filter((_, i) => i !== index));
  };

  // Enter 키로 추가
  const handleQualificationKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addQualification();
    }
  };

  // 모집 분야(직무) 선택/제거 함수 (토글 방식)
  const togglePosition = (pos) => {
    setSelectedPositions((prev) => {
      const isSelected = prev.some((item) => item.id === pos.id);
      if (isSelected) {
        return prev.filter((item) => item.id !== pos.id);
      } else {
        return [...prev, { ...pos, count: 1 }];
      }
    });
  };

  // 모집 분야 인원 증가 함수
  const handleIncrementPositionCount = (positionId) => {
    setSelectedPositions((prev) =>
      prev.map((pos) => (pos.id === positionId ? { ...pos, count: pos.count + 1 } : pos)),
    );
  };

  // 모집 분야 인원 감소 함수
  const handleDecrementPositionCount = (positionId) => {
    setSelectedPositions((prev) =>
      prev.map((pos) =>
        pos.id === positionId && pos.count > 1 ? { ...pos, count: pos.count - 1 } : pos,
      ),
    );
  };

  const handleSubmit = async () => {
    // 이메일 형식 검증
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(projectContact)) {
      alert('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    const recruitmentPositions = selectedPositions.reduce((acc, { id, count }) => {
      acc[id] = count;
      return acc;
    }, {});

    const requestPayload = {
      title: projectTitle,
      description: projectDescription,
      contact: String(projectContact),
      partnerType: qualifications.length > 0 ? qualifications[0] : '',
      techStackIds: selectedSkill.map((skill) => skill.id),
      recruitmentPositions: recruitmentPositions,
      startDate: postData.startDate,
      endDate: postData.endDate,
    };

    console.log('--- API Request Structure ---');
    console.log('requestPayload:', requestPayload);

    const response = await postProject(requestPayload, postImgUrl);
    console.log('response', response);
    if (response.isSuccess) {
      toast.success('프로젝트가 성공적으로 생성되었습니다.');
      navigate('/projectJoin');
    } else {
      toast.error('프로젝트 생성 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-[1213px] mx-auto">
        <div className="w-[1213px] h-[44px] mx-auto border-b">
          <div className="text-[22px] font-semibold">📌 프로젝트</div>
        </div>
        <div className="w-full flex flex-col gap-[80px]">
          {/* 이미지 */}
          <div className="flex flex-col items-center justify-center mt-[80px]">
            <div className="relative group">
              <Label
                htmlFor="picture"
                className="w-[276px] h-[276px] relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-grey100 hover:bg-gray-200 transition"
              >
                {imageUrl ? (
                  <>
                    <img
                      src={imageUrl}
                      alt="Selected"
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 transition duration-200">
                      <div className="text-white text-center">
                        <p className="text-sm">이미지 변경</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <PlusIcon className="text-gray-500 w-[40px] h-[40px] mb-2" />
                    <p className="text-gray-500 text-sm">이미지 선택</p>
                  </div>
                )}
              </Label>
              {imageUrl && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImgUrl('');
                    setPostImgUrl('');
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              )}
            </div>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          {/* 프로젝트 제목 */}
          <div>
            <div className="text-[22px] font-medium mb-2 ">프로젝트 제목</div>
            <IntroduceInput
              width="1213px"
              height="60px"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </div>

          {/* 프로젝트 소개 */}
          <div>
            <div className="text-[22px] font-medium mb-2">프로젝트 소개</div>
            <IntroduceTextArea
              width="1213px"
              height="170px"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>

          {/* 프로젝트 기간 */}
          <div>
            <div className="text-[22px] font-medium mb-2">프로젝트 기간</div>
            <ProjectPeriod onDateChange={handleDateChange} />
          </div>

          {/* 연락처 입력 */}
          <div>
            <div className="text-[22px] font-medium mb-2">연락처</div>
            <IntroduceInput
              width="1213px"
              height="60px"
              value={projectContact}
              onChange={(e) => setProjectContact(e.target.value)}
              placeholder="이메일을 입력해주세요 (예: example@email.com)"
            />
            {projectContact && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(projectContact) && (
              <p className="text-red-500 text-sm mt-1">올바른 이메일 형식을 입력해주세요.</p>
            )}
          </div>

          {/* 모집 분야 */}
          <div className="flex flex-col gap-6">
            <div className="font-medium text-[20px] ">모집 분야</div>
            {/* Popover for position selection */}
            <Popover
              open={isPositionPopoverOpen}
              onOpenChange={setIsPositionPopoverOpen}
              className="w-full"
            >
              <PopoverTrigger className="w-full" asChild>
                <div className="relative w-full">
                  <div
                    className="w-full h-[60px] bg-grey100 rounded-lg border px-6 flex items-center justify-between cursor-pointer"
                    onClick={() => setIsPositionPopoverOpen(!isPositionPopoverOpen)}
                  >
                    <span className="text-grey400">
                      {selectedPositions.length > 0
                        ? `${selectedPositions.length}개 분야 선택됨`
                        : '모집 분야를 선택해주세요'}
                    </span>
                    {isPositionPopoverOpen ? (
                      <ChevronUpIcon className="w-5 h-5 text-grey400 transition-transform duration-200" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-grey400 transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="w-[--radix-popover-trigger-width] p-0 bg-white shadow-lg border"
                align="start"
              >
                <div className="w-full max-h-[300px] overflow-y-auto">
                  {positionOptions.length > 0 ? (
                    positionOptions.map((pos) => (
                      <label
                        key={pos.id}
                        className="flex items-center w-full hover:bg-grey100 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 px-6 py-3 w-full">
                          <Checkbox
                            id={`position-${pos.id}`}
                            checked={selectedPositions.some((p) => p.id === pos.id)}
                            onCheckedChange={() => togglePosition(pos)}
                            className="h-5 w-5 rounded border-grey300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <span className="text-[16px] text-grey900">{pos.name}</span>
                        </div>
                      </label>
                    ))
                  ) : (
                    <div className="px-6 py-3 text-grey400">모집 분야 옵션 로딩 중...</div>
                  )}
                </div>
              </PopoverContent>
            </Popover>
            {/* Selected positions with count setting */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-4">
              {selectedPositions.map((item) => (
                <PositionSetting
                  key={item.id}
                  positionName={item.name}
                  count={item.count}
                  onIncrement={() => handleIncrementPositionCount(item.id)}
                  onDecrement={() => handleDecrementPositionCount(item.id)}
                />
              ))}
            </div>
          </div>
          {/* 기술스택 */}
          <div className="flex flex-col gap-6">
            <div className="font-medium text-[20px] ">기술스택</div>
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
                className="px-14 h-[60px] bg-grey100 placeholder:text-grey400 placeholder:text-[16px] focus-visible:ring-0"
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
          {/* 지원자격 */}
          <div className="flex flex-col gap-6">
            <div className="font-medium text-[20px] ">어떤 분을 찾고 있나요?</div>
            <div className="relative">
              <Input
                className="h-[60px] bg-grey100 relative placeholder:text-grey400 placeholder:text-[17px] focus-visible:ring-0"
                placeholder="내용을 입력해주세요 (Enter 키로 추가)"
                value={qualificationInput}
                onChange={(e) => setQualificationInput(e.target.value)}
                onKeyUp={handleQualificationKeyDown}
              />
            </div>
            <div className="flex flex-col gap-2">
              {qualifications.map((qualification, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-grey100 rounded-md"
                >
                  <span>{qualification}</span>
                  <button
                    onClick={() => removeQualification(index)}
                    className="text-grey400 hover:text-red-500 transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 등록하기 */}
          <div className="w-full flex flow-row justify-end mt-[50px] mb-[119px]">
            <PrimaryButton width="277px" height="57px" text="등록하기" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfoForm;
