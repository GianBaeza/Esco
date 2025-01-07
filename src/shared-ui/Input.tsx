"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isValid?: boolean;
  register?: UseFormRegisterReturn;
}

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  register,
  ...rest
}: InputProps) => {
  const inputClass = `w-full p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`;

  return (
    <input
      {...register}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${inputClass} ${className}`}
      {...rest}
    />
  );
};

export default Input;