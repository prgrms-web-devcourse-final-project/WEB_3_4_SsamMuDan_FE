import ProfileCard from '@/components/career/ProfileCard';

const CardList = ({ careerInfo }) => {
  return (
    <div className="w-full flex flex-wrap gap-3">
      {careerInfo.map((item, index) => (
        <ProfileCard key={index} data={item} />
      ))}
    </div>
  );
};

export default CardList;
