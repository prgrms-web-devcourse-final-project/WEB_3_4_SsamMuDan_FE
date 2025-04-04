import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';
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

  return (
    <div className="relative w-full h-[580px] overflow-visible">
      <div className="relative w-full max-w-[1920px] mx-auto h-full overflow-visible">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
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
                      <div className="text-[50px] font-bold whitespace-pre-line mt-28">
                        {slide.text.main}
                      </div>
                      <div className="text-[25px] text-grey300 font-[400] mt-[40px]">
                        {slide.text.sub}
                      </div>
                    </div>
                    <div className="w-[108px] h-[44px] p-[10px] flex items-center rounded-[30px] bg-grey300 justify-around mt-28">
                      <div className="text-[20px] text-white ml-2">{index + 1}</div>
                      <div className="text-[20px] text-grey200">/ 3</div>
                      <ChevronRightIcon
                        className="w-[20px] text-white hover:cursor-pointer ml-[10px]"
                        onClick={() => swiperRef.current?.slideNext()}
                      />
                    </div>
                  </div>
                </div>

                {/* 우측 배경이미지 */}
                <div className="absolute top-0 right-0 h-full w-[1026px] pointer-events-none">
                  <div
                    className="absolute right-0 w-[645px] h-[514px] z-0"
                    style={{ backgroundColor: slide.bgColor }}
                  ></div>
                  <div className="absolute top-[60px] right-[57px]">
                    <img
                      src={slide.image}
                      alt={`슬라이드 이미지 ${index + 1}`}
                      className="w-[840px] h-[520px]"
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
