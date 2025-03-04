"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import InputCustom from "@/shared-ui/InputCustom";
import { useStoreLogin } from "@/context/StoreGlobal";
import LoaderGlobal from "../loaderGlobal/LoaderGlobal";
import Image from "next/image";
import logo from "../../../public/xing.png";
import googleIcon from "../../../public/google.svg";

interface LoginForm {
  user: string;
  password: string;
}

const fields = [
  { name: "user", type: "text", label: "Usuario" },
  { name: "password", type: "password", label: "Contraseña" },
];

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();
  const router = useRouter();

  const { setLogin, loading } = useStoreLogin();

  const onSubmit = async ({ user, password }: LoginForm) => {
    try {
      await setLogin(user, password);
      router.push("/home");
    } catch (error) {
      setError("user", {
        type: "manual",
        message: error instanceof Error ? error.message : String(error),
      });
    }
  };

  return (
    <div className="bg-white/70 flex items-center justify-center rounded-2xl hover:justify-end h-[40rem] w-full lg:w-[55rem] hover:relative overflow-hidden border-2 border-transparent/85 mx-4 lg:mx-0 pt-16 lg:pt-0">
      <div className="h-full sticky w-full lg:w-6/12 bg-background-login bg-cover bg-center bg-no-repeat bg-opacity-50 left-0 rounded-r-lg hover:w-[32rem] hover:absolute transition-all ease-in-out z-10 hidden lg:block"></div>

      {loading && <LoaderGlobal />}
      <div className="flex items-start flex-col h-full justify-center w-full lg:w-6/12 static">
        <div className=" flex justify-center lg:justify-start lg:relative lg:left-5 w-full pt-6">
          <Image
            src={logo}
            alt="xing iconos"
            width={40}
            height={40}
            className="flex z-0  md:static"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-4 lg:px-6 h-full justify-start items-center gap-4 rounded-xl w-full font-tajawal font-medium"
        >
          <header className="flex flex-col w-full gap-3 pt-6 lg:pt-10">
            <h1 className="text-2xl text-center flex flex-col w-10/12 m-auto">
              <strong className="text-black text-start text-3xl">¡Hola!</strong>{" "}
              <span className="text-gray-700 text-xl">
                Nos alegra verte de nuevo.
              </span>
            </h1>
            <span className="pt-5 flex flex-col gap-2">
              <button
                type="submit"
                className="border w-full lg:w-9/12 m-auto border-black bg-white text-black px-4 lg:px-14 py-1.5 rounded flex text-sm gap-2 justify-center items-center"
              >
                <Image
                  src={googleIcon}
                  alt="Google Icon"
                  height={0}
                  width={15}
                />
                Login in with Google
              </button>
              <span className="flex items-center justify-center gap-2">
                <hr className="h-px bg-black w-4/12" /> <p>or</p>{" "}
                <hr className="h-px bg-black w-4/12" />
              </span>
            </span>
          </header>
          <section className="w-full h-[15rem] flex flex-col pt-5 gap-3 items-center">
            {fields.map(({ name, type, label }, index) => (
              <label key={index} className="flex flex-col w-full lg:w-9/12">
                <p>{label}</p>
                <InputCustom
                  {...register(name as keyof LoginForm, {
                    required: "Este campo es obligatorio",
                  })}
                  type={type}
                  placeholder={label}
                />
                {errors[name as keyof LoginForm] && (
                  <span className="text-red-600 text-sm pt-3">
                    {errors[name as keyof LoginForm]?.message}
                  </span>
                )}
              </label>
            ))}
            <footer className="flex w-full justify-center gap-3">
              <p className="text-sm text-blue-gray-700 cursor-pointer hover:text-black transition-all ease-linear">
                Olvide mi contra/user
              </p>
              <p className="text-sm text-blue-gray-700 cursor-pointer hover:text-black transition-all ease-linear">
                Crear cuenta
              </p>
            </footer>
          </section>
          <button
            type="submit"
            className="border border-black bg-black text-white px-12 lg:px-24 py-1 rounded hover:bg-[#314543] hover:text-white transition-all w-full lg:w-auto"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
