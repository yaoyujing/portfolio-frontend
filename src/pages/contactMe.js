import Navbar from "../components/genericSections/navbar";
import ContactMeComp from "../components/contactMeComponents/contactMe";
import Background from "../components/genericSections/background";
export default function ContactMe() {
  return (
    <Background>
      <Navbar></Navbar>
      <ContactMeComp></ContactMeComp>
      {/* <ContactLinks></ContactLinks> */}
    </Background>
  );
}
