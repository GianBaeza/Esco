"use client";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

// Lista de enlaces de navegación
const navLinks = [
  { nombre: "Inicio", url: "/" },
  { nombre: "Nosotros", url: "/nosotros" },
  { nombre: "Servicios", url: "/servicios" },
  { nombre: "Contacto", url: "/contacto" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full h-16 px-6 bg-white shadow-md fixed lg:static top-0 z-50">
      <div className="text-xl font-semibold text-gray-800">
        <Link href="/">LOGO</Link>
      </div>

      <div className="lg:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={22}
          color="#4A4A4A"
        />
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full lg:pr-20 shadow-md lg:shadow-none lg:static lg:flex lg:items-center lg:w-auto bg-white `}
      >
        <ul className="flex flex-col gap-4 p-4 lg:flex-row lg:gap-8 lg:p-0">
          {navLinks.map((link, index) => (
            <li key={index} className="text-center">
              <Link
                href={link.url}
                className="text-gray-700 hover:text-gray-900 hover:underline transition"
              >
                {link.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
