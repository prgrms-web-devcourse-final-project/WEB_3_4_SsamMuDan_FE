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
import ProjectJoin from './pages/ProjectJoin';
import ProjectJoinWrite from './pages/ProjectJoinWrite';

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
        <Route path="/careerWrite" element={<CareerWrite />} />
        <Route path="/projectJoin" element={<ProjectJoin />} />
        <Route path="/projectJoinWrite" element={<ProjectJoinWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
