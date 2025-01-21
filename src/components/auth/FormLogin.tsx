"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputCustom from "@/shared-ui/InputCustom";
import { useStoreLogin } from "@/context/StoreGlobal";

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
    formState: { errors },
  } = useForm<LoginForm>();
  const router = useRouter();

  const { setLogin } = useStoreLogin();

  const onSubmit = async ({ user, password }: LoginForm) => {
    try {
      await setLogin(user, password);
      router.push("/home");
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-white/10 px-6  justify-center items-center gap-4 rounded-xl max-w-[400px] h-[500px] font-tajawal font-medium  "
    >
      <header className="flex flex-col w-full gap-2">
        <h1 className="text-2xl  text-center "> Iniciar sesión</h1>
        <p className="text-center text-md">
          Ingresa tus credenciales para acceder a tu cuenta. Si olvidaste tu
          usuario o contraseña, puedes recuperarlos en{" "}
          <Link href="/">Opciones</Link>.
        </p>
      </header>

      {/* Mapeo de los campos del formulario */}
      {fields.map(({ name, type, label }, index) => (
        <label key={index} className="flex flex-col w-9/12 ">
          <p>{label}</p>
          <InputCustom
            {...register(name as keyof LoginForm, {
              required: "Este campo es obligatorio",
            })}
            type={type}
            placeholder={label}
            // No necesitamos value manual, React Hook Form lo maneja internamente
          />
          {errors[name as keyof LoginForm] && (
            <span className="text-red-600 text-sm">
              {errors[name as keyof LoginForm]?.message}
            </span>
          )}
        </label>
      ))}

      <button
        type="submit"
        className=" border border-black text-white px-4 py-2 rounded hover:bg-gray-600 transition-all "
      >
        Iniciar sesión
      </button>
    </form>
  );
}
