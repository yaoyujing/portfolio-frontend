import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import Linkedin from "../../assets/images/Linkedin.svg";
export default function ContactLinks() {
  return (
    <div className="flex gap-4">
      <a href="https://www.linkedin.com/in/yaoyujing">
        {" "}
        <img src={Linkedin} className="w-[140px]"></img>
      </a>
      <a href="https://t.me/yaoyujing">Telegram</a>
    </div>
  );
}
