import React from "react";

export default function Button({ type, title }) {
  return (
    <button type={type} className="p-2 rounded border ">
      {title}
    </button>
  );
}
