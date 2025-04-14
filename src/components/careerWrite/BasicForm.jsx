import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import IntroduceInput from '../common/IntroduceInput';
import IntroduceTextArea from '../common/IntroduceTextArea';
import StackBadge from '@/common/StackBadge';
import { useState, useEffect } from 'react';
import getSkillStack from '@/api/careerWrite/getSkillStack';
import getPosition from '@/api/careerDetail/getPosition';
const BasicForm = ({ setPostData, setResumeImage }) => {
  // 이미지
  const [imageUrl, setImgUrl] = useState('');
  const [postImgRul, setPostImgUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // 미리보기용 URL 생성
      const previewUrl = URL.createObjectURL(file);
      setImgUrl(previewUrl);
      setPostImgUrl(file); // 실제 파일 객체 저장
      setResumeImage(file); // 부모 컴포넌트로 파일 전달
    }
  };

  // 이메일
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    if (!value.trim()) {
      setEmailError('이메일을 입력해주세요.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('올바른 이메일 형식을 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  //직무
  const [position, setPosition] = useState([]);
  const [positionQuery, setPositionQuery] = useState('');
  const [positionSuggestions, setPositionSuggestions] = useState([]);
  const [positionOptions, setPositionOptions] = useState([]);
  const [activePositionIndex, setActivePositionIndex] = useState(-1);

  // 연차
  const [years, setYears] = useState('');

  // 선택된 기술 스택을 저장하는 상태
  const [selectedSkill, setSelectedSkill] = useState([]);
  // 자기소개
  const [introduction, setIntroduction] = useState('');

  // 기술 스택 입력값 상태
  const [query, setQuery] = useState('');

  // 추천 검색어 상태
  const [suggestions, setSuggestions] = useState([]);

  // API에서 받아온 기술 스택 옵션
  const [techStackOptions, setTechStackOptions] = useState([]);
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

  // 컴포넌트가 마운트될 때, 직무 옵션을 비동기로 불러옵니다.
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const options = await getPosition();
        console.log('Position API Response:', options);
        setPositionOptions(options);
        console.log('저장된 옵션', positionOptions);
      } catch (error) {
        console.error('Error fetching position options:', error);
      }
    };

    fetchPositions();
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

  // 직무 입력값이 바뀔 때마다 추천 검색어를 업데이트합니다.
  useEffect(() => {
    if (positionQuery.trim() === '') {
      setPositionSuggestions([]);
      return;
    }
    const filtered = positionOptions.filter((pos) => pos.name.includes(positionQuery));
    setPositionSuggestions(filtered);
  }, [positionQuery, positionOptions]);

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

  // 직무 선택 함수
  const selectPosition = (pos) => {
    console.log('Selected Position:', pos);
    setPosition((prev) => {
      // 중복 방지 (이미 선택된 경우 추가하지 않음)
      if (prev.some((item) => item.id === pos.id)) {
        return prev;
      }
      return [...prev, pos];
    });
    // 추천 목록과 입력창 초기화
    setPositionQuery('');
    setPositionSuggestions([]);
  };

  // 직무 제거 함수
  const removePosition = (posToRemove) => {
    setPosition((prev) => prev.filter((item) => item.id !== posToRemove.id));
  };

  // 키보드 이벤트 처리
  const handlePositionKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActivePositionIndex((prev) => (prev + 1 >= positionSuggestions.length ? 0 : prev + 1));
    } else if (e.key === 'ArrowUp') {
      setActivePositionIndex((prev) => (prev - 1 < 0 ? positionSuggestions.length - 1 : prev - 1));
    } else if (e.key === 'Enter') {
      if (activePositionIndex >= 0 && activePositionIndex < positionSuggestions.length) {
        selectPosition(positionSuggestions[activePositionIndex]);
      }
      e.preventDefault();
    }
  };

  // 입력값들이 변경될 때마다 부모의 postData.basicInfo 업데이트
  useEffect(() => {
    setPostData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        profileImage: imageUrl,
        email: email,
        years: parseInt(years, 10) || 0,
        introduction,
        developPositionIds: position.map((pos) => pos.id),
        techStackIds: selectedSkill.map((skill) => skill.id),
      },
    }));
  }, [imageUrl, email, years, introduction, position, selectedSkill]);

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-[1213px] mx-auto">
        {/* 제목 */}
        <div className="w-[1213px] h-[44px] mx-auto border-b">
          <div className="text-[22px] font-semibold">📌 기본정보</div>
        </div>
        <div className="w-full flex flex-col gap-[42px]">
          {/* 이미지 */}
          <div className="flex flex-col items-center justify-center mt-[80px]">
            <div className="text-[22px] font-medium mb-2">프로필 이미지</div>
            <div className="relative group">
              <Label
                htmlFor="picture"
                className="block w-[276px] h-[276px] relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-grey100 hover:bg-gray-200 transition"
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
                    setResumeImage(null);
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
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
              className="hidden"
              onChange={handleImageChange}
            />
            <p className="text-grey400 text-sm mt-2">
              지원하는 파일 형식: JPEG, JPG, PNG, GIF, WEBP
            </p>
          </div>
          {/* 이메일 */}
          <div>
            <div className="text-[22px] font-medium mb-2">이메일</div>
            <IntroduceInput
              width="1213px"
              height="60px"
              value={email}
              onChange={handleEmailChange}
              placeholder="이메일을 입력해주세요 (예: example@email.com)"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            <p className="text-red-500 text-sm mt-1">* 필수 입력 항목입니다</p>
          </div>
          {/* 직무 */}
          <div>
            <div className="text-[22px] font-medium mb-2">개발직무</div>
            <div className="flex flex-wrap items-center gap-6 mb-4">
              {position.map((item) => (
                <StackBadge
                  key={item.id}
                  text={item.name}
                  showCloseIcon={true}
                  onClose={() => removePosition(item)}
                />
              ))}
            </div>
            <Popover className="w-full">
              <PopoverTrigger className="w-full" asChild>
                <div className="relative w-full">
                  <div
                    className="w-full h-[60px] bg-grey100 rounded-lg border px-6 flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="bg-grey100 text-grey400">직무를 선택해주세요</span>
                    {isOpen ? (
                      <ChevronUpIcon className="w-5 h-5 text-grey400 transition-transform duration-200" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-grey400 transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 bg-white shadow-lg" align="start">
                <div className="w-full max-h-[400px] overflow-y-auto">
                  {positionOptions.map((pos) => (
                    <label
                      key={pos.id}
                      className="flex items-center w-full hover:bg-mint50 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 px-6 py-4 w-[1213px]">
                        <Checkbox
                          id={`position-${pos.id}`}
                          checked={position.some((p) => p.id === pos.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              selectPosition(pos);
                            } else {
                              removePosition(pos);
                            }
                          }}
                          className="h-5 w-5 rounded border-grey300 data-[state=checked]:bg-primary300 data-[state=checked]:border-mint500"
                        />
                        <span className="text-[16px] text-grey900">{pos.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <p className="text-red-500 text-sm mt-1">* 필수 입력 항목입니다</p>
          </div>
          {/* 연차 */}
          <div>
            <div className="text-[22px] font-medium mb-2">연차</div>
            <IntroduceInput
              value={years}
              width="1213px"
              height="60px"
              onChange={(e) => setYears(e.target.value)}
              placeholder="신입은 0, 10년 이상의 경력일 경우 10으로 입력해주세요"
            />

            <p className="text-red-500 text-sm mt-1">* 필수 입력 항목입니다</p>
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
            <p className="text-red-500 text-sm mt-1">* 필수 입력 항목입니다</p>
          </div>
          {/* 자기소개 */}
          <div>
            <div className="text-[22px] font-medium mb-2">자기소개</div>
            <IntroduceTextArea
              value={introduction}
              width="1213px"
              height="170px"
              onChange={(e) => setIntroduction(e.target.value)}
            />
            <p className="text-red-500 text-sm mt-1">* 필수 입력 항목입니다</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicForm;
