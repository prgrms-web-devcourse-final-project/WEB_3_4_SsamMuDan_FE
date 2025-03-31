import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jiwoo from './pages/Jiwoo';
import Jungseok from './pages/Jungseok';
import JongHee from './pages/JongHee';
import Main from './pages/Main';
import Login from './pages/Login';
import Career from './pages/Career';
import CareerDetail from './pages/CareerDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jungseok" element={<Jungseok />} />
        <Route path="/jiwoo" element={<Jiwoo />} />
        <Route path="/jonghee" element={<JongHee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/career" element={<Career />} />
        <Route path="/careerDetail/:id" element={<CareerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
