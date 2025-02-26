"use client";
import { useStoreCarrito, useStoreLogin } from "@/context/StoreGlobal";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import Swal from "sweetalert2";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

interface NavLink {
  nombre: string;
  url: string;
}

// Lista de enlaces de navegación
const navLinks: NavLink[] = [
  { nombre: "Inicio", url: "/" },
  { nombre: "Nosotros", url: "/nosotros" },
  { nombre: "Servicios", url: "/servicios" },
  { nombre: "Productos", url: "/productos" },
  { nombre: "Contacto", url: "/contacto" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { carrito } = useStoreCarrito();
  const { logOut, accessToken } = useStoreLogin();
  const router = useRouter();

  const handleCerrarSession = () => {
    Swal.fire({
      title: "¿Deseas cerrar session?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí,cerrar",
    }).then((result) => {
      if (result.isConfirmed) {
        const isTrue = logOut();
        if (isTrue) {
          router.push("/");
        }
      }
    });
  };
  return (
    <header className="flex justify-between items-center w-full h-16 px-6 bg-black shadow-md fixed lg:static top-0 z-50 font-tajawal">
      <div className="text-xl font-semibold text-gray-800">
        <Link href="/">LOGO</Link>
      </div>

      <div className="lg:hidden ">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={22}
          color="#ffffff"
        />
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full lg:pr-20 shadow-md lg:shadow-none lg:static lg:flex lg:items-center lg:w-auto`}
      >
        <ul className="flex flex-col  items-center justify-center  lg:items-start lg:justify-normal gap-4 p-4 lg:flex-row lg:gap-8 lg:p-0  bg-black/70 lg:bg-transparent">
          {navLinks.map(({ nombre, url }, index) => (
            <li key={index} className="text-center">
              <Link
                href={url}
                className="text-white hover:text-gray-300 hover:underline transition"
              >
                {nombre}
              </Link>
            </li>
          ))}
          <li>
            <Menu>
              <MenuHandler>
                <span className="text-white flex items-center gap-2 cursor-pointer">
                  <PiShoppingCartBold color="white" /> {carrito.length || 0}
                </span>
              </MenuHandler>
              <MenuList className="flex flex-col items-start gap-2  ">
                <button className="bg-transparent hover:bg-blue-gray-200/50 w-full text-start rounded-lg p-1">
                  Ver Resumen{" "}
                </button>
                <Link
                  href={"/carrito"}
                  className="bg-transparent hover:bg-blue-gray-200/50 w-full text-start rounded-lg p-1"
                >
                  Carrito
                </Link>
              </MenuList>
            </Menu>
          </li>
          <li className="flex gap-2">
            <button
              onClick={() => {
                router.push("/");
              }}
              className={`bg-black text-white ${
                !accessToken ? "flex" : "hidden"
              }`}
            >
              Iniciar session
            </button>
            <button
              onClick={handleCerrarSession}
              className={`bg-black text-white ${
                !accessToken ? "hidden" : "flex"
              }`}
            >
              Cerrar session
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
