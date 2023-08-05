import { Link } from "react-router-dom";
import L from "../assets/images/L.png";
export default function Introduction() {
  const linkCss =
    "px-4 py-2 rounded transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300";
  return (
    <div className="flex mx-20 my-[300px]">
      <div className="flex mx-auto gap-20 items-center">
        <div className="flex flex-col items-center w-fit capitalize gap-4">
          <p className="text-bold text-[60px] ">
            Hi there! I'm <p className="text-blue-400 inline">YuJing</p>
          </p>
          <p className="text-[20px] capitalize font-normal">
            I'm a Full Stack Web Developer Based in Singapore
          </p>
          <div className="flex gap-[30px] text-[20px]">
            <Link to="" className={`${linkCss} bg-blue-400 text-white`}>
              Lets Talk
            </Link>
            <Link className={`${linkCss} bg-white`}>My projects</Link>
          </div>
        </div>
        <img className="w-[380px] h-[380px]" src={L}></img>
      </div>
    </div>
  );
}
