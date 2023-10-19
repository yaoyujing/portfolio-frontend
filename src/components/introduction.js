import { Link } from "react-scroll";
import L from "../assets/images/L.png";
import { useSelector, useDispatch } from "react-redux";
import { setActiveButton } from "../redux/boilerplate/activeButtonSlice";
import LinkedinSVG from "../assets/images/Linkedin.svg";
import TelegramSVG from "../assets/images/telegram.svg";
import WhatsAppSVG from "../assets/images/WhatsApp.svg";
import githubSVG from "../assets/images/github.svg";
export default function Introduction() {
  const dispatch = useDispatch();
  const linkCss =
    "px-4 py-2 rounded transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300";
  return (
    <div id="home" className="flex flex-col mx-20 py-[200px]">
      <div className="flex ">
        <div className="flex mx-auto gap-20 items-center">
          <div className="flex flex-col items-center w-fit capitalize gap-8">
            <p className="text-bold text-[60px] ">
              Hi there! I'm <p className="text-blue-400 inline">YuJing 👋</p>
            </p>
            <p className="text-[22px] capitalize font-medium">
              I'm a Full Stack Web Developer Based in Singapore
            </p>
            <div className="flex gap-[30px] text-[20px]">
              <Link
                onClick={() => dispatch(setActiveButton("aboutMe"))}
                to="aboutMe"
                smooth={true}
                duration={500}
                className={`${linkCss} bg-blue-400 text-white`}
              >
                Know more about me
              </Link>
              <Link
                onClick={() => dispatch(setActiveButton("myProjects"))}
                to="myProjects"
                smooth={true}
                duration={500}
                className={`${linkCss} bg-white`}
              >
                My projects
              </Link>
            </div>
          </div>
          <img className="w-[380px] h-[380px]" src={L}></img>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 pt-20">
        <a href="https://www.linkedin.com/in/yaoyujing" target="_blank">
          {" "}
          <img src={LinkedinSVG} className="w-[80px] h-[60px] "></img>
        </a>
        <a href="https://github.com/yaoyujing" target="_blank">
          {" "}
          <img src={githubSVG} className="w-[80px] h-[60px] "></img>
        </a>
        <a href="https://t.me/yaoyujing" target="_blank">
          <img src={TelegramSVG} className="w-[26px] h-[60px]"></img>
        </a>
        <a href="https://wa.me/6590586759" target="_blank">
          <img src={WhatsAppSVG} className="w-[40px] h-[60px]"></img>
        </a>
      </div>
    </div>
  );
}
