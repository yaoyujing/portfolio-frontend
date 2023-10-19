import Navbar from "../components/genericSections/navbar";
import AboutMeComp from "../components/aboutMe";
import Project from "../components/projects";
import ContactMeComp from "../components/contactMeComponents/contactMe";
import Introduction from "../components/introduction";
import Background from "../components/genericSections/background";

export default function Homepage() {
  return (
    <Background>
      <Navbar></Navbar>
      <Introduction></Introduction>

      <AboutMeComp></AboutMeComp>
      <Project></Project>
      <ContactMeComp></ContactMeComp>
    </Background>
  );
}
