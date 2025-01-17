import React from "react";

const categoryArray = ["Todos", "fragrances", "beauty", "furniture"];
export default function MenuNavigate({ handleChangeCategory, categoryActive }) {
  return (
    <nav className="shadow-lg w-full">
      <ul className="flex gap-5 justify-center items-center font-lora font-medium p-0">
        {categoryArray.map((category, i) => (
          <li
            key={i}
            className={`cursor-pointer ${
              categoryActive === category ? "bg-slate-400" : ""
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
