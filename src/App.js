import HomePage from "./pages/home";
import MyProjects from "./pages/myProjects";
import MySkills from "./pages/mySkills";
import ContactMe from "./pages/contactMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/project" element={<MyProjects />}></Route>
        <Route path="/skills" element={<MySkills />}></Route>
        <Route path="/contactMe" element={<ContactMe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
