"use client";
import React from "react";

type ButtonDefaultProps = {
  className?: string;
  children: React.ReactNode;
};

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  className = "",
  children,
}) => {
  return (
    <button
      className={`mb-4 px-6 py-3 text-lg font-normal font-tajawal rounded-md bg-trasparent text-white hover:bg-slate-500/25  border border-neutral-500  transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonDefault;
