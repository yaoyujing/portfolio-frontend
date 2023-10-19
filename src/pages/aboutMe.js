import AboutMeComp from "../components/aboutMe";
import Navbar from "../components/genericSections/navbar";
import Background from "../components/genericSections/background";
export default function AboutMePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Background>
        <AboutMeComp></AboutMeComp>
      </Background>
    </div>
  );
}
