import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import IntroduceInput from '../common/IntroduceInput';
import IntroduceTextArea from '../common/IntroduceTextArea';
import StackBadge from '@/common/StackBadge';
import { useState, useEffect } from 'react';
import getSkillStack from '@/api/careerWrite/getSkillStack';

const BasicForm = ({ setPostData }) => {
  // 이미지
  const [imageUrl, setImgUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // 임시 URL 생성 후 상태 업데이트
      setImgUrl(URL.createObjectURL(file));
    }
  };

  // 이메일
  const [email, setEmail] = useState('');

  //직문
  const [position, setPosition] = useState('');

  // 연차
  const [years, setYears] = useState('');

  // 선택된 기술 스택을 저장하는 상태
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [introduction, setIntroduction] = useState([]);

  // 기술 스택 입력값 상태
  const [query, setQuery] = useState('');
  // 추천 검색어 상태
  const [suggestions, setSuggestions] = useState([]);
  // API에서 받아온 기술 스택 옵션
  const [techStackOptions, setTechStackOptions] = useState([]);

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

  // 입력값들이 변경될 때마다 부모의 postData.basicInfo 업데이트
  useEffect(() => {
    setPostData({
      basicInfo: {
        profileImage: imageUrl,
        email: email,
        years: parseInt(years, 10) || 0,
        introduction: introduction,
        // 예시로 position을 단일 값으로 처리 (ID로 변환이 필요하면 로직 추가)
        developPositionIds: position,
        // selectedSkill에서 기술 스택의 id값을 추출 (만약 id가 없으면 name으로 대체 가능)
        techStackIds: selectedSkill.map((skill) => skill.name),
      },
    });
  }, [imageUrl, email, years, introduction, position, selectedSkill]);

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
            <Label
              htmlFor="picture"
              className="group w-[276px] h-[276px] relative flex flex-col items-center justify-center border-gray-300 rounded-lg cursor-pointer bg-grey100 hover:bg-gray-200 transition"
            >
              {imageUrl ? (
                <>
                  <img
                    src={imageUrl}
                    alt="Selected"
                    className="object-cover w-full h-full rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-start justify-end rounded-lg bg-grey500 bg-opacity-0 opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 transition duration-200">
                    <XMarkIcon
                      onClick={(e) => {
                        // 부모 요소의 클릭 이벤트가 실행되지 않도록 방지
                        e.stopPropagation();
                        // imageUrl 삭제
                        setImgUrl('');
                      }}
                      className="w-[20px] m-3 text-white "
                    />
                  </div>
                </>
              ) : (
                <PlusIcon className="text-gray-500 w-[40px] stroke-[5]" />
              )}
            </Label>
            <Input
              id="picture"
              type="file"
              className="hidden w-[276px] h-[276px]"
              onChange={handleImageChange}
            />
          </div>
          {/* 이메일 */}
          <div>
            <div className="text-[22px] font-medium mb-2 ">이메일</div>
            <IntroduceInput
              width="1213px"
              height="60px"
              value={email} // ✅ value props 추가
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* 직무 */}
          <div>
            <div className="text-[22px] font-medium mb-2">개발직무</div>
            <IntroduceInput
              width="1213px"
              height="60px"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          {/* 연차 */}
          <div>
            <div className="text-[22px] font-medium mb-2">연차</div>
            <IntroduceInput
              width="1213px"
              height="60px"
              onChange={(e) => setYears(e.target.value)}
            />
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
              />
              <MagnifyingGlassIcon className="absolute top-[20px] left-[20px] w-[20px] " />
              {/* 추천 검색어 드롭다운 */}
              {suggestions.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-200 mt-2 rounded shadow">
                  {suggestions.map((tech, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectSkill(tech)}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* 자기소개 */}
          <div>
            <div className="text-[22px] font-medium mb-2">자기소개</div>
            <IntroduceTextArea
              width="1213px"
              height="170px"
              onChange={(e) => setIntroduction(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicForm;
