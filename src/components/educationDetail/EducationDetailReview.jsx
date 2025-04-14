import { StarIcon } from '@heroicons/react/24/solid';

const EducationDetailReview = ({ reviewinfo }) => {
  return (
    <div className="w-[760px] mb-10 mt-4 relative mx-auto">
      <div className="flex gap-2">
        {/* 프로필사진 */}
        <div className="w-11 h-11 rounded-full mb-1 overflow-hidden">
          {reviewinfo?.profileImageUrl ? (
            <img
              src={reviewinfo?.profileImageUrl}
              alt={reviewinfo?.id}
              className="object-cover w-full h-full"
            />
          ) : (
            <img
              src="/images/dummy-user-avatar.svg"
              alt={reviewinfo?.id}
              className="object-cover "
            />
          )}
        </div>
        {/* 닉네임 & 작성일 */}
        <div className="flex flex-col mb-1">
          <p className="text-base font-semibold">{reviewinfo?.id}</p>
          <p className="text-gray-400 text-sm">{reviewinfo?.createdAt}</p>
        </div>
      </div>
      {/* 별점 */}
      <div className="flex items-center text-yellow-400 mb-1">
        {Array(reviewinfo?.rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="w-5 h-5" />
          ))}
      </div>
      {/* 내용 */}
      <div>
        <p className="leading-relaxed whitespace-pre-wrap">{reviewinfo?.content}</p>
      </div>
    </div>
  );
};

export default EducationDetailReview;
