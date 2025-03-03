import React from "react";

const categoryArray = ["Todos", "fragrances", "beauty", "furniture"];

interface Props {
  handleChangeCategory: (category: string) => void;
  categoryActive: string;
}
export default function MenuNavigate({
  handleChangeCategory,
  categoryActive,
}: Props) {
  return (
    <nav className="w-full flex justify-center pt-5">
      <ul className="flex gap-5 justify-center items-center font-tajawal font-medium p-0 shadow-lg border-b border-none  w-auto">
        {categoryArray.map((category, i) => (
          <li
            key={i}
            className={`cursor-pointer transition-all duration-300 ease-in-out  text-xl text-white ${
              categoryActive !== category ? "bg-transparent" : "bg-red-300"
            } p-1 rounded-lg`}
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
