import LectureCardSimple from '../common/LectureCardSimple';

const EducationBanner = () => {
  return (
    <div className="h-[377px] w-full relative bg-[url(/images/education-banner.svg)] bg-no-repeat bg-cover mb-[88px]">
      <div className="w-[1246px] flex pt-[60px] mx-auto">
        <div className="mr-[50px]">
          <div className="w-[73px] h-[33px] rounded-[20px] bg-[#3FC22E] text-[14px] font-bold mb-[20px] text-center leading-[33px] text-white">
            New
          </div>
          <div className="font-esamanru esamanru-medium mb-[10px] text-[30px]">
            새로 등록된 강의
          </div>
          <div className="text-[16px] font-regular text-grey600">
            개발 강의 신규 서비스를 CoTree에서 만나세요!
          </div>
        </div>
        <div className="flex mt-[20px]">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div className="mr-[16px]" key={index}>
                <LectureCardSimple
                  imageUrl="images/education-image1.png"
                  title="Jenkins를 이용한 CI/CD Pipeline 구축"
                  price="70,400원"
                  instructor="Dowon Lee "
                  customstyle="!h-[187px]"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EducationBanner;
