// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/footer";

import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// TODO : router 세련되게 바꾸기
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
