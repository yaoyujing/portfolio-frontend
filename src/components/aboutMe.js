export default function AboutMeComp() {
  return (
    <div
      id="aboutMe"
      className="px-20 py-[70px] flex items-center justify-center bg-white/40 "
    >
      <div className="flex flex-col gap-4 w-full text-[20px] ">
        <p className="text-[60px] underline underline-offset-8 mb-6 text-center py-20">
          About Me
        </p>
        <div className="flex gap-20 justify-center">
          <div className="w-[600px]">
            <p className="text-[40px] font-semibold">Hello! I'm YuJing</p>
            <p>
              I am a web developer who has an immense passion for web
              development!
            </p>
            <p>
              My ultimate career goal is to become a full stack developer. I
              want to master both front-end and back-end technologies to create
              complete and well-rounded web applications.
            </p>
            <p>
              Apart from coding, I have a couple of hobbies that I'm passionate
              about. One is badminton, which I love playing in my free time. It
              helps me stay active and competitive.
            </p>
            <p>
              The other passion of mine is music and I find that listening to
              music often helps me stay focused and inspired while coding.
            </p>
          </div>
          <div className="capitalize">
            <p className="text-[32px] font-bold">Technical skills</p>
            <p className="text-[20px] font-semibold">Front End</p>
            <ul>
              <li> &bull; React</li>
              <li> &bull; Tailwind css</li>
              <li> &bull; Javascript</li>
              <li>&bull; HTML/CSS</li>
            </ul>

            <p className="text-[20px] font-semibold">Backend</p>
            <ul>
              <li>&bull; NodeJs</li>
              <li>&bull; Flask</li>
              <li>&bull; Django</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
