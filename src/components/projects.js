import "../css/home.css";
import ecommerce from "../assets/images/ecommerce.jpg";
import fishProject from "../assets/images/fishProject.jpg";
export default function Project() {
  const hoverEffectLink =
    "transition bg-orange-400 hover:bg-orange-300 ease-in-out delay-50 duration-300 hover:drop-shadow-lg w-fit px-2 py-1 rounded-lg text-center text-white font-bold text-[14px] absolute bottom-4 left-1/4";
  const cardCss =
    "w-fit h-[500px] relative flex flex-col bg-white p-2 rounded-lg gap-2 shadow-md";
  return (
    <div id="myProjects" className="px-20 py-20 ">
      <p className="text-[60px] underline underline-offset-[18px] mb-[70px] text-center">
        My projects
      </p>
      <div className="flex gap-[50px] items-center justify-center">
        <div className={cardCss}>
          <img src={ecommerce} className="w-60 bg-slate-300 rounded-lg"></img>
          <p>uShop (2023)</p>
          <div className="flex gap-2 items-center text-white font-bold">
            <div className="border bg-orange-400 rounded-lg px-2 py-1 text-[12px] flex items-center">
              ReactJS
            </div>
            <div className="border bg-blue-400 rounded-lg px-2 py-1 text-[12px] flex items-center">
              Tailwind
            </div>
          </div>

          <p className="mb-4 w-60">
            Ecommerce website for buying and selling various products.The
            project is expected to have a significant impact on the company's
            overall value proposition
          </p>
          <a
            href="http://stg.ushop.market/"
            target="_blank"
            className={hoverEffectLink}
          >
            Visit Website
          </a>
        </div>
        <div className={cardCss}>
          <img src={ecommerce} className="w-60 bg-slate-300 rounded-lg"></img>
          <p>Clincal Web (MERN stack)</p>
          <div className="flex gap-2 items-center text-white font-bold">
            <div className="border bg-orange-400 rounded-lg px-2 py-1 text-[12px] flex items-center">
              ReactJS
            </div>
            <div className="border bg-blue-400 rounded-lg px-2 py-1 text-[12px] flex items-center">
              NodeJs
            </div>
            <div className="border bg-slate-400 rounded-lg px-2 py-1 text-[12px] flex items-center">
              MongoDB
            </div>
            
          </div>
        <div className="flex flex-col">
          <p className="mb-4 w-60"/>
            Self build project (MERN stack)
          <ul>
            <li>-React (netlify)</li>
            <li>-NodeServer (Render)</li>
            <li>-MongoDB (Mongo Atlas)</li>
          </ul>
          </div>
          <a
            href="https://yujing.netlify.app/"
            target="_blank"
            className={hoverEffectLink}
          >
            Visit Website
          </a>
        </div>
        <div className={cardCss}>
          <img src={ecommerce} className="w-60 bg-slate-300 rounded-lg"></img>
          <p className="w-60">SSD (School project)</p>
          <div className="flex gap-2 items-center text-white font-bold">
            <div className="border bg-orange-400 rounded-lg px-2 py-1 text-[12px] flex items-center">
              ReactJS
            </div>
            <div className="border bg-blue-400 rounded-lg px-2 py-1 text-[12px] flex items-center">
              Flask
            </div>
          </div>
          <p className="w-60">Ecommerce website with an emphasis on:</p>
          <ul className="w-60 list-disc pl-6">
            <li>Web security such as JWT token, session management</li>
            <li>Automation with CICD pipeline</li>
            <li>Microservices with docker and kubernetes</li>
          </ul>

          <a
            href="https://github.com/ict3103/3x03_Team17_Project"
            target="_blank"
            className={hoverEffectLink}
          >
            View Github
          </a>
        </div>
        <div className={cardCss}>
          <img
            src={fishProject}
            className="w-60 h-40 bg-slate-300 rounded-lg"
          ></img>
          <p>Fish on a conveyor belt (2022)</p>
          <div className="flex gap-2 items-center text-white font-bold">
            <div className="border bg-orange-400 rounded-lg px-2 py-1 text-[12px] flex items-center">
              Python
            </div>
          </div>

          <p className="mb-4 w-60">
            Video recording and image analysis of fishes to automate and
            increase the efficiency of fish phenotyping with Python OpenCV and
            YoloV3 packages.
          </p>
          <a
            href="https://github.com/fishguardians/fishing-on-a-conveyor-belt"
            target="_blank"
            className={hoverEffectLink}
          >
            View Github
          </a>
        </div>
      </div>
    </div>
  );
}
