import React, { useState } from "react";
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

const InputCustom = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  register,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value && value.trim() !== "";

  const transparentBackgroundClass =
    hasValue || isFocused ? "bg-transparent" : "";

  return (
    <input
      {...register}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete="off"
      onFocus={() => setIsFocused(true)} // Maneja el foco
      onBlur={() => setIsFocused(false)} // Maneja la pérdida de foco
      placeholder={placeholder}
      className={`w-full p-1 text-base border-b border-black bg-transparent focus:outline-none focus:ring-0 ${className} ${transparentBackgroundClass} text-black focus:bg-transparent`}
      {...rest}
    />
  );
};

export default InputCustom;
