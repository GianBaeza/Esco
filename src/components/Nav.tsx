"use client";
import { useStoreCarrito, useStoreLogin } from "@/context/StoreGlobal";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";

// Lista de enlaces de navegación
const navLinks = [
  { nombre: "Inicio", url: "/" },
  { nombre: "Nosotros", url: "/nosotros" },
  { nombre: "Servicios", url: "/servicios" },
  { nombre: "Productos", url: "/productos" },
  { nombre: "Contacto", url: "/contacto" },
  { nombre: "Iniciar Sesion", url: "/login" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { carrito } = useStoreCarrito();
  const { logOut } = useStoreLogin();
  const router = useRouter();

  const handleCerrarSession = () => {
    const isTrue = logOut();
    if (isTrue) {
      router.push("/");
    }
  };
  return (
    <header className="flex justify-between items-center w-full h-16 px-6 bg-black shadow-md fixed lg:static top-0 z-50 font-tajawal">
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
        } absolute top-16 left-0 w-full lg:pr-20 shadow-md lg:shadow-none lg:static lg:flex lg:items-center lg:w-auto   `}
      >
        <ul className="flex flex-col gap-4 p-4 lg:flex-row lg:gap-8 lg:p-0">
          {navLinks.map((link, index) => (
            <li key={index} className="text-center">
              <Link
                href={link.url}
                className="text-white hover:text-gray-300 hover:underline transition"
              >
                {link.nombre}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={"/Carrito"}
              className="text-white flex items-center gap-2 cursor-pointer"
            >
              <PiShoppingCartBold color="white" /> {carrito.length || 0}
            </Link>
          </li>
          <li>
            <button
              onClick={handleCerrarSession}
              className="bg-black text-white"
            >
              Cerrar session
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
