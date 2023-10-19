import HomePage from "./pages/home";
import MyProjects from "./pages/myProjects";
import ContactMe from "./pages/contactMe";
import AboutMePage from "./pages/aboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/myProjects" element={<MyProjects />}></Route>
        <Route path="/contactMe" element={<ContactMe />}></Route>
        <Route path="/aboutMe" element={<AboutMePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
