import { useForm } from "react-hook-form";
import "../css/home.css";

export default function ContactMeComp() {
  const inputCss = "px-4 py-2 border w-full rounded ";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="w-full flex items-center justify-center flex-1 my-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[400px] h-fit bg-white rounded-xl shadow-xl p-10 gap-2 "
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
        {/* errors will return when field validation fails  */}
        {errors.name && <span className="text-red-400">name is required</span>}
        {errors.email && (
          <span className="text-red-400">Email is required</span>
        )}

        <button
          type="submit"
          className="border w-fit text-center py-2 px-4 rounded mx-auto bg-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
