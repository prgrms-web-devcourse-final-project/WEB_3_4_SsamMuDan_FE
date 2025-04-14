import getUserInfo from '@/api/login/getUserInfo';
import logoutUser from '@/api/login/logoutUser';
import useAuthStore from '@/store/useAuthStore';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn, userInfo, logout, loginWithUserInfo } = useAuthStore();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 사용자 정보 불러오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await getUserInfo();
        loginWithUserInfo(res.data);
      } catch (err) {
        console.error('유저 정보 불러오기 실패:', err);
      }
    };
    fetchUserInfo();
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
        <div className="flex items-center ml-auto" ref={dropdownRef}>
          {isLoggedIn ? (
            <>
              <span className="text-[16px] font-medium">{userInfo?.nickname}</span>
              {/* 드롭다운 전체를 감싸는 컨테이너 */}
              <div className="relative ml-[20px]">
                <button onClick={() => setDropdownOpen((prev) => !prev)}>
                  <img
                    src={userInfo?.profileImageUrl || '/images/default-avatar.svg'}
                    alt="프로필"
                    className="w-[36px] h-[36px] rounded-full object-cover border"
                  />
                </button>
                {/* 드롭다운 메뉴 */}
                {dropdownOpen && (
                  <div className="absolute top-full right-0 w-[150px] bg-white shadow-md border rounded-[10px] z-50">
                    <Link
                      to="/mypage"
                      className="block px-4 py-2 m-1 text-sm font-semibold text-gray-700 rounded-[10px] hover:bg-[#E5F9F1] text-center"
                      onClick={() => setDropdownOpen(false)}
                    >
                      마이페이지
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-[140px] px-4 py-2 m-1 text-sm font-semibold text-gray-700 rounded-[10px] hover:bg-[#FFEDED] text-center"
                    >
                      로그아웃
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-[16px] font-Thin mr-[28px]">
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
