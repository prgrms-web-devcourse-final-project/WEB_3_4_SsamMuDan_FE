import { NavLink } from 'react-router-dom';
import ActionButton from '../common/ActionButton';

const EducationPay = ({ price, instructor }) => {
  return (
    <div className="w-[400px] h-[355px] rounded-[12px] bg-white border border-[#D9D9D9] shadow-md  p-[24px] mb-[28px]">
      <div className="font-semibold  text-[35px] mt-[33px] mb-[26px]">{price}70,000 원</div>
      <div className="flex justify-around mb-[42px]">
        <div className="flex items-center mr-[30px]">
          <img src="/icons/educationdetail-user.svg" className="mr-[7px]" alt="유저" />
          <div className="font-[18px] font-regular">{instructor} 코트리</div>
        </div>
        <div className="flex items-center mr-[30px]">
          <img src="/icons/educationdetail-clock.svg" className="mr-[7px]" alt="시간" />
          <div className="font-[18px] font-regular">{instructor} 1시간 10분</div>
        </div>
        <div className="flex items-center">
          <img src="/icons/educationdetail-fire.svg" className="mr-[7px]" alt="단계" />
          <div className="font-[18px] font-regular">{instructor} 입문용</div>
        </div>
      </div>
      <NavLink to="/payment" className="relative ">
        <ActionButton variant={'payment'} text="결제하기" customeStyle="w-full mb-[14px]" />
        <img
          src="/icons/educationdetail-tree.svg"
          alt="포인트"
          className="absolute top-[-26px] right-[8px]"
        />
      </NavLink>
      <ActionButton variant={'like'} text="좋아요" customeStyle="w-full" />
    </div>
  );
};

export default EducationPay;
