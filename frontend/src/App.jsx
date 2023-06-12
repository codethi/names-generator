import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Names } from "./components/Names";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/names" element={<Names />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
