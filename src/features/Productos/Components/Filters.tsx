"use client";

import React from "react";

export default function Filters({ onChange }) {
  return (
    <header className="w-9/12 m-auto h-auto flex  justify-between items-center my-10">
      <h2 className="text-2xl font-tajawal font-medium">Todos Los Productos</h2>
      <label htmlFor="search" className="flex flex-col items-center gap-2">
        Buscar productos
        <input
          type="search"
          className="bg-red-300 p-1 r border-black border-2  rounded-md"
          onChange={onChange}
        />
      </label>
    </header>
  );
}
