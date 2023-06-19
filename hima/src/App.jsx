import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import InspiringDesign from "./Pages/InspiringDesign/InspiringDesign";
import History from "./Pages/OurHistory/History";
import Projects from "./Pages/Projects/Projects";
import Sustainability from "./Pages/Sustainability/Sustainability";
import Contact from "./Pages/ContactUs/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="our-history" element={<History />} />
          <Route path="inspiring-design" element={<InspiringDesign />} />
          <Route path="projects" element={<Projects />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);