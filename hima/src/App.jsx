import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import InspiringDesign from "./Pages/InspiringDesign/InspiringDesign";
import History from "./Pages/OurHistory/History";
import Projects from "./Pages/Projects/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="our-history" element={<History />} />
          <Route path="inspiring-design" element={<InspiringDesign />} />
          <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);