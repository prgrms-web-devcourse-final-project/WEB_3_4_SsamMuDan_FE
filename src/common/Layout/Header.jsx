import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="border-b border-[#E4E4E4]">
      <div className=" max-w-[1246px] h-[80px] text-center mx-auto flex items-center ">
        <NavLink to="/">
          <img src="/images/Main-Logo.svg" alt="메인로고" />
        </NavLink>
        <ul className="flex ml-[102px]">
          <li>
            <NavLink to="/" className="text-[18px] font-semibold mr-[53px]">
              교육
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-[18px] font-semibold mr-[53px]">
              채용
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-[18px] font-semibold mr-[53px]">
              커뮤니티
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-[18px] font-semibold mr-[53px]">
              프로젝트
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center ml-auto">
          <NavLink to="/login" className="text-[18px] font-Thin mr-[53px] mr-[28px]">
            로그인
          </NavLink>
          <NavLink className="text-[18px] text-white w-[89px] h-[35px] rounded-[8px] bg-primary300 flex items-center justify-center">
            회원가입
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
