import { BrowserRouter, Routes, Route } from "react-router-dom";
import Memotest from "./Memotest";
import { ToastContainer,Slide } from 'react-toastify';



function App() {
  return (
    <BrowserRouter>
    <h1 style={{fontSize:"48px"}}>Memotechnology</h1>
      <Routes>
        <Route path="/" element={<Memotest />} />
      </Routes>
     <ToastContainer autoClose={1500} transition={Slide}/> 
    </BrowserRouter>
  );
}

export default App;
