import { useForm } from "react-hook-form";
import "../../css/home.css";
import ReCAPTCHA from "react-google-recaptcha";
import LinkedinSVG from "../../assets/images/Linkedin.svg";
import TelegramSVG from "../../assets/images/telegram.svg";
import ContactUsSVG from "../../assets/images/contactUs.jpg";
import WhatsAppSVG from "../../assets/images/WhatsApp.svg";
export default function ContactMeComp() {
  const inputCss = "px-4 py-2 border w-full rounded my-2 border-slate-400";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const onChange = () =>
    (document.getElementById("submitBtn").disabled = false);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="flex flex-col gap-14" id="contactMe">
      <p className="text-[60px] underline underline-offset-8 text-center">
        Get in touch with me
      </p>
      <div className="w-full flex items-center justify-center flex-1 mb-20">
        <div className="h-[532px] bg-white shadow-xl ">
          <img src={ContactUsSVG} className="h-full py-20" alt=""></img>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[400px] h-fit bg-white shadow-xl py-10 px-10"
        >
          <h1 className="text-center text-[30px] font-semibold">Contact Me</h1>
          {/* register your input into the hook by invoking the "register" function */}
          {/* include validation with required or other standard HTML validation rules */}
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="name"
            className={inputCss}
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
            className={inputCss}
          />
          <textarea
            placeholder="message"
            {...register("message", { required: true })}
            className={inputCss}
          />
          {/* errors will return when field validation fails  */}
          {errors.name && (
            <span className="text-red-500">name is required</span>
          )}
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          {errors.message && (
            <span className="text-red-500">Message cannot be empty</span>
          )}
          <ReCAPTCHA
            sitekey="6LcmtYInAAAAAHfnGyiSNZenBr2az5nhiJdvFosZ"
            onChange={onChange}
            className="my-4"
          />

          <button
            disabled
            type="submit"
            id="submitBtn"
            className="border w-fit text-center py-2 px-4 rounded-lg mx-auto bg-blue-400 text-white font-medium "
          >
            Submit
          </button>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/yaoyujing" target="_blank" rel="noreferrer">
              {" "}
              <img src={LinkedinSVG} className="w-[80px] h-[60px] " alt=""></img>
            </a>
            <a href="https://t.me/yaoyujing" target="_blank" rel="noreferrer">
              <img src={TelegramSVG} className="w-[26px] h-[60px]" alt=""></img>
            </a>
            <a href="https://wa.me/6590586759" target="_blank" rel="noreferrer">
              <img src={WhatsAppSVG} className="w-[40px] h-[60px]" alt=""></img>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
