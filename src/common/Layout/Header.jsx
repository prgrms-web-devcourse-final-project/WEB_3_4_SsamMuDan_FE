import getUserInfo from '@/api/login/getUserInfo';
import logoutUser from '@/api/login/logoutUser';
import useAuthStore from '@/store/useAuthStore';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn, userInfo, logout, loginWithUserInfo } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserInfo();
        loginWithUserInfo(res.data); // -> 유저 정보로 가져와서 새로고침 해도 유지
      } catch (err) {}
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (err) {
      console.error('로그아웃 요청 실패:', err);
    } finally {
      logout();
      navigate('/');
    }
  };

  return (
    <div className="border-b border-[#E4E4E4]">
      <div className=" max-w-[1246px] h-[80px] text-center mx-auto flex items-center ">
        <NavLink to="/">
          <img src="/images/Main-Logo.svg" alt="메인로고" />
        </NavLink>
        <ul className="flex ml-[102px]">
          <li>
            <NavLink to="/education" className="text-[18px] font-semibold mr-[53px]">
              교육
            </NavLink>
          </li>
          <li>
            <NavLink to="/career" className="text-[18px] font-semibold mr-[53px]">
              채용
            </NavLink>
          </li>
          <li>
            <NavLink to="/projectJoin" className="text-[18px] font-semibold mr-[53px]">
              프로젝트
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className="text-[18px] font-semibold mr-[53px]">
              커뮤니티
            </NavLink>
          </li>
        </ul>

        {/* 회원정보 및 로그인/로그아웃 버튼 */}
        <div className="flex items-center ml-auto">
          {isLoggedIn ? (
            <>
              <span className="text-[16px] mr-[20px] font-semibold">
                테스트 헤더 👉{userInfo?.nickname} 님
              </span>
              <button
                onClick={handleLogout}
                className="text-[18px] text-white w-[89px] h-[35px] rounded-[8px] bg-primary300 flex items-center justify-center"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-[18px] font-Thin mr-[28px]">
                로그인
              </NavLink>
              <NavLink
                to="/signup"
                className="text-[18px] text-white w-[89px] h-[35px] rounded-[8px] bg-primary300 flex items-center justify-center"
              >
                회원가입
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
