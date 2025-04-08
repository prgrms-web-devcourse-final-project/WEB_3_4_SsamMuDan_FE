import LectureCard from '@/common/LectureCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TechTubeList = ({ data, swiperRef }) => {
  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={24}
        modules={[Navigation]}
        className="tech-swiper hide-default-nav"
      >
        {data.length > 0 ? (
          data.map((item, id) => (
            <SwiperSlide key={id}>
              <LectureCard
                title={item.title}
                instructor={item.writer}
                likes={item.likeCount}
                price={item.price}
                imageUrl={item.techTubeThumbnailUrl}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>강의를 불러오는 중입니다...</p>
        )}
      </Swiper>
    </div>
  );
};

export default TechTubeList;
