import { BrowserRouter, Routes, Route } from "react-router-dom";
import Memotest from "./Memotest";

function App() {
  return (
    <BrowserRouter>
    <h1 style={{fontSize:"48px"}}>Memotechnology</h1>
      <Routes>
        <Route path="/" element={<Memotest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
