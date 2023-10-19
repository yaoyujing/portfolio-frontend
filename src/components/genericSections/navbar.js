import { Link } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { setActiveButton } from "../../redux/boilerplate/activeButtonSlice";
import "../../css/home.css";
export default function Navbar() {
  const activeButton = useSelector((state) => state.activeButton.value);
  const dispatch = useDispatch();
  const activeButtonHandler = (buttonName) => ({
    color: activeButton === buttonName ? "orange" : "",
    textDecoration: activeButton === buttonName ? "underline" : "",
    textUnderlineOffset: activeButton === buttonName ? "4px" : "",
  });
  const hoverEffectLink =
    "transition ease-in-out delay-50  hover:-translate-y-1  duration-300  hover:text-blue-400";
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between h-[40px] py-10 px-10 border-b-2 border-slate-300 drop-shadow-lg z-10 bg-blue-50">
      <Link to="/" className="font-bold text-[22px]">
        YuJing.Dev
      </Link>
      <nav className="flex gap-10 font-semibold text-[20px] ">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className={hoverEffectLink}
          onClick={() => dispatch(setActiveButton("home"))}
          style={activeButtonHandler("home")}
        >
          Home
        </Link>
        <Link
          to="aboutMe"
          smooth={true}
          duration={500}
          className={hoverEffectLink}
          onClick={() => dispatch(setActiveButton("aboutMe"))}
          style={activeButtonHandler("aboutMe")}
        >
          About me
        </Link>

        <Link
          to="myProjects"
          smooth={true}
          duration={500}
          className={hoverEffectLink}
          onClick={() => dispatch(setActiveButton("myProjects"))}
          style={activeButtonHandler("myProjects")}
        >
          Projects
        </Link>
        <Link
          to="contactMe"
          smooth={true}
          duration={500}
          className={hoverEffectLink}
          onClick={() => dispatch(setActiveButton("contactMe"))}
          style={activeButtonHandler("contactMe")}
        >
          Contact me
        </Link>
      </nav>
    </div>
  );
}
