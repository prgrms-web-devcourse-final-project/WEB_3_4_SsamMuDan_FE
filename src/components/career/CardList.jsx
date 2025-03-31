import ProfileCard from '@/components/career/ProfileCard';

const CardList = () => {
  return (
    <div className="w-full flex flex-wrap justify-between   ">
      {Array(16)
        .fill(null)
        .map((_, index) => (
          <ProfileCard key={index} />
        ))}
    </div>
  );
};

export default CardList;
