import { BrowserRouter, Routes, Route } from "react-router-dom";
import Memotest from "./Memotest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Memotest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
