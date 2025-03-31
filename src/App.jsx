import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Jiwoo from './pages/Jiwoo';
import Jungseok from './pages/Jungseok';

import './App.css';
import JongHee from './pages/JongHee';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jungseok" element={<Jungseok />} />
        <Route path="/jiwoo" element={<Jiwoo />} />
        <Route path="/jonghee" element={<JongHee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
