import { useEffect, useState, useRef } from 'react';
import CommunityCard from './CommunityCard';
import SlideButton from './SlideButton';
import getCommunityPosts from '@/api/main/getCommunityPosts';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CommunitySection = () => {
  const [posts, setPosts] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchCommunityPosts = async () => {
      try {
        const data = await getCommunityPosts({ size: 100 });
        setPosts(data);
      } catch (error) {
        console.error('❌ 커뮤니티 글 조회 실패:', error);
      }
    };

    fetchCommunityPosts();
  }, []);

  return (
    <div className="w-[1246px] mx-auto h-auto">
      <div className="flex items-center justify-between mb-[35px]">
        <div className="text-[25px] font-esamanru">커뮤니티에서 지금 만나요</div>
        <SlideButton
          onPrev={() => swiperRef.current?.slidePrev()}
          onNext={() => swiperRef.current?.slideNext()}
          linkTo="/community"
        />
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={24}
        modules={[Navigation]}
        className="community-swiper hide-default-nav"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <CommunityCard
              title={post.title}
              content={post.content}
              viewCount={post.viewCount}
              commentCount={post.commentCount}
              likeCount={post.likeCount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommunitySection;
