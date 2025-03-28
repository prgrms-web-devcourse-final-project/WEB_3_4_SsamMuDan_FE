import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import Jiwoo from "./pages/Jiwoo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jiwoo" element={<Jiwoo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
