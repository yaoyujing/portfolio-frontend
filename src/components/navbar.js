import { Link } from "react-router-dom";
import "../css/home.css";
export default function Navbar() {
  const hoverEffectLink =
    "transition ease-in-out delay-50  hover:-translate-y-1  duration-300 hover:drop-shadow-lg hover:text-blue-400";
  return (
    <div className="flex justify-between h-[40px] py-10 mx-20 border-b-2 border-slate-300 drop-shadow-lg">
      <div className="font-bold text-[22px]">YuJing.Dev</div>
      <nav className="flex gap-10 font-semibold text-[20px] ">
        <Link to="/" className={hoverEffectLink}>
          About me
        </Link>
        <Link to="/skills" className={hoverEffectLink}>
          Skills
        </Link>
        <Link to="/project" className={hoverEffectLink}>
          Projects
        </Link>
        <Link to="/contactMe" className={hoverEffectLink}>
          Contact me
        </Link>
      </nav>
    </div>
  );
}
