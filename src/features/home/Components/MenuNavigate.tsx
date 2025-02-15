import React from "react";

const categoryArray = ["Todos", "fragrances", "beauty", "furniture"];
export default function MenuNavigate({ handleChangeCategory, categoryActive }) {
  return (
    <nav className="w-full flex justify-center pt-5">
      <ul className="flex gap-5 justify-center items-center font-tajawal font-medium p-0 shadow-lg border-b border-none  w-auto">
        {categoryArray.map((category, i) => (
          <li
            key={i}
            className={`cursor-pointer transition-all duration-300 ease-in-out  text-xl text-white ${
              categoryActive === category ? "bg-slate-400" : "bg-transparent"
            } p-1 rounded-t-md`}
            onClick={() => handleChangeCategory(category)}
            value={category}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
