"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputCustom from "@/shared-ui/InputCustom";
import { useStoreLogin } from "@/context/StoreGlobal";
import LoaderGlobal from "../loaderGlobal/LoaderGlobal";

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
    <>
      {loading && <LoaderGlobal />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-slate-500/10 px-6  justify-center items-center gap-4 rounded-xl max-w-[400px] h-[500px] font-tajawal font-medium  "
      >
        <header className="flex flex-col w-full gap-2">
          <h1 className="text-2xl  text-center "> Iniciar sesión</h1>
          <p className="text-center text-md">
            Ingresa tus credenciales para acceder a tu cuenta. Si olvidaste tu
            usuario o contraseña, puedes recuperarlos en{" "}
            <Link href="/">Opciones</Link>.
          </p>
        </header>

        {fields.map(({ name, type, label }, index) => (
          <label key={index} className="flex flex-col w-9/12 ">
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

        <button
          type="submit"
          className=" border border-black text-black px-4 py-2 rounded hover:bg-gray-600 transition-all "
        >
          Iniciar sesión
        </button>
      </form>
    </>
  );
}
