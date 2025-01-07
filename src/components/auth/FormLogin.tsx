"use client";

import Input from "@/shared-ui/Input";
import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "./services";

const field = [
  { name: "usuario", type: "text" },
  { name: "contraseña", type: "password" },
];

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ usuario, contraseña }: any) => {
    const user = {
      usuario,
      contraseña,
    };
    try {
      const response = await loginUser(user);
      console.log("Inicio de sesión exitoso:", response);
    } catch (error: any) {
      console.error("Error en el inicio de sesión:", error.message);
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  const valueData = getValues();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-red-500 rond p-3 justify-center items-center gap-4  rounded w-6/12  h-[300px]"
    >
      {field.map(({ name, type }, i) => (
        <label key={i} className="flex flex-col ">
          {name}
          <Input
            {...register(name, { required: "Este campo es obligatorio" })}
            type={type}
            placeholder={name}
            value={valueData.name || undefined}
          />
        </label>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
}
