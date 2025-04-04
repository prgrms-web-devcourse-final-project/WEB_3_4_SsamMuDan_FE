import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { Autoplay } from 'swiper/modules';

const slideData = [
  {
    text: {
      main: `혼자서 공부할 필요 없어\n다 같이 즐기면서 공부하자!`,
      sub: '프로젝트를 함께 만들며, 즐거운 협업을 경험해 보세요.',
    },
    image: '/images/main-banner-green.svg',
    bgColor: '#ACF0D8',
  },
  {
    text: {
      main: `핵심만 쏙쏙!\n역시 TechBook 밖에 없다!`,
      sub: 'TechTube & TechBook으로 언제 어디서든 배워보세요.',
    },
    image: '/images/main-banner-red.svg',
    bgColor: '#FFC1B9',
  },
  {
    text: {
      main: `새로운 기회는 준비된 자에게\n먼저 찾아온다!`,
      sub: '이력서를 등록하고, 나에게 딱 맞는 제안을 받아보세요.',
    },
    image: '/images/main-banner-blue.svg',
    bgColor: '#AAD2FF',
  },
];

const HeroSlider = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태

  return (
    <div className="relative w-full h-[580px] overflow-visible">
      <div className="relative w-full max-w-[1920px] mx-auto h-full overflow-visible">
        {/* 네비게이션 버튼 (고정위치) */}
        <div className="absolute z-20 hidden lg:block bottom-[16px] md:bottom-[200px] lg:bottom-[155px] xl:bottom-[80px] 2xl:bottom-[2px] left-[160px] md:left-[200px] lg:left-[0px] xl:left-[130px] 2xl:left-[345px]">
          {' '}
          <div className="w-[100px] md:w-[108px] lg:w-[100px] h-[40px] md:h-[44px] p-[8px] md:p-[10px] flex items-center justify-around rounded-[30px] bg-grey300">
            <div className="text-[15px] md:text-[20px] lg:text-[22px] xl:text-[20px] text-white ml-2">
              {currentSlide + 1}
            </div>
            <div className="text-[15px] md:text-[20px] lg:text-[22px] xl:text-[20px] text-grey200">
              / 3
            </div>
            <ChevronRightIcon
              className="w-[18px] md:w-[20px] text-white hover:cursor-pointer ml-[8px] md:ml-[10px]"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex);
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 3초마다 다음 슬라이드로 넘어감
          speed={1000}
          modules={[Autoplay]}
          className="w-full h-full"
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* 좌측 타이틀 */}
                <div className="relative z-10 w-full max-w-[1246px] mx-auto h-full flex items-center">
                  <div className="flex flex-col justify-between h-[427px] w-[690px]">
                    <div>
                      <div className="text-[32px] xl:text-[40px] 2xl:text-[50px] font-bold mt-16 xl:mt-20 2xl:mt-28 leading-tight">
                        {slide.text.main.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </div>
                      <div className="text-[15px] xl:text-[20px] 2xl:text-[25px] text-grey300 font-[400] mt-[40px]">
                        {slide.text.sub}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 우측 배경이미지 */}
                {/* 2xl(1536px) / xl(1280px) / lg(1024px) / md(768px) */}
                <div className="hidden lg:block absolute top-0 right-0 h-full w-[1026px] pointer-events-none">
                  <div
                    className="absolute right-0 z-0 
                w-[400px] xl:w-[500px] 2xl:w-[645px] h-[390px] xl:h-[450px] 2xl:h-[514px]"
                    style={{ backgroundColor: slide.bgColor }}
                  ></div>

                  <div
                    className="absolute 
                  top-[40px] xl:top-[50px] 2xl:top-[40px] 
                  right-[20px] xl:right-[40px] 2xl:right-[57px]"
                  >
                    <img
                      src={slide.image}
                      alt={`슬라이드 이미지 ${index + 1}`}
                      className="w-[460px] lg:w-[600px] xl:w-[700px] 2xl:w-[840px] h-auto"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
