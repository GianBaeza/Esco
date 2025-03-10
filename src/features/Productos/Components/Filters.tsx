"use client";

import React from "react";

export default function Filters({ onChange }) {
  return (
    <header className="w-9/12 m-auto h-auto flex  justify-between items-center my-10">
      <h2 className="text-2xl font-tajawal font-medium">Todos Los Productos</h2>
      <input type="search" className="border" onChange={onChange} />
    </header>
  );
}
