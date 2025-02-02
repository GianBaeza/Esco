import React from "react";
import "./loading.css";
export default function loading() {
  return (
    <div className="absolute left-0 top-0 bg-black/5 w-full flex justify-center items-center h-screen1">
      <span className="loader "></span>;
    </div>
  );
}
