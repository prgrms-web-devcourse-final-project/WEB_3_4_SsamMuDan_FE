import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jiwoo from './pages/Jiwoo';
import Jungseok from './pages/Jungseok';
import JongHee from './pages/JongHee';
import Main from './pages/Main';
import Login from './pages/Login';
import Education from './pages/Education';
import Signup from './pages/Signup';
import Career from './pages/Career';
import Payment from './pages/Payment';
import Mypage from './pages/Mypage';
import CareerDetail from './pages/CareerDetail';
import CareerWrite from './pages/CareerWrite';
import TechTube from './pages/TechTube';
import TechBook from './pages/TechBook';
import CommunityDetail from './pages/CommunityDetail';
import Community from './pages/Community';
import ProjectJoin from './pages/ProjectJoin';
import ProjectJoinWrite from './pages/ProjectJoinWrite';
import ProjectJoinDetail from './pages/ProjectJoinDetail';
import PageNotFound from './pages/PageNotFound';
import CommunityWrite from './pages/CommunityWrite';
import LoginKakaoCallback from './pages/LoginKakaoCallback';
import Loading from './components/common/Loading';
import PayFail from './pages/PayFail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jungseok" element={<Jungseok />} />
        <Route path="/jiwoo" element={<Jiwoo />} />
        <Route path="/jonghee" element={<JongHee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/education" element={<Education />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/career" element={<Career />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/careerDetail/:id" element={<CareerDetail />} />
        <Route path="/careerWrite/:id" element={<CareerWrite />} />
        <Route path="/TECH_TUBE/:id" element={<TechTube />} />
        <Route path="/TECH_BOOK/:id" element={<TechBook />} />
        <Route path="/communityDetail/:id" element={<CommunityDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/projectJoin" element={<ProjectJoin />} />
        <Route path="/projectJoinWrite/:id" element={<ProjectJoinWrite />} />
        <Route path="/communityWrite" element={<CommunityWrite />} />
        <Route path="/projectJoinDetail/:id" element={<ProjectJoinDetail />} />
        <Route path="/login/callback" element={<LoginKakaoCallback />} />
        <Route path="/payfail" element={<PayFail />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
