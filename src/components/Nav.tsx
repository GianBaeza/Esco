"use client";
import { useStoreCarrito, useStoreLogin } from "@/context/StoreGlobal";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PiShoppingCartBold, PiUser } from "react-icons/pi";
import Swal from "sweetalert2";
import { createPortal } from "react-dom";
import ModalsContainter from "@/features/carrito/components/ModalsContainter";
import MenulistGlobal from "./MenuList/MenulistGlobal";
import Image from "next/image";
import logo from "../../public/xing.png";

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
  const [isOpenResumen, setIsOpenResumen] = useState(false);
  const { carrito } = useStoreCarrito();
  const { logOut, accessToken, username } = useStoreLogin();
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

  const handleOpenResumen = () => {
    setIsOpenResumen(!isOpenResumen);
  };

  return (
    <header className="flex justify-between items-center w-full h-16 px-6 bg-blue-gray-300/5 shadow-md fixed lg:static top-0 z-50 font-tajawal">
      <div className="text-xl font-semibold text-gray-800">
        <Link href="/">
          <Image src={logo} alt="logo" height={40} width={40} />
        </Link>
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
            <MenulistGlobal
              keyProps={1}
              icon={
                <span className="text-white flex items-center gap-2 cursor-pointer">
                  <PiShoppingCartBold color="white" /> {carrito.length || 0}
                </span>
              }
              listaDelMenu={
                <div>
                  {" "}
                  <button
                    className="bg-transparent hover:bg-blue-gray-200/50 w-full text-start rounded-lg p-1"
                    onClick={handleOpenResumen}
                  >
                    Ver Resumen{" "}
                  </button>
                  <Link
                    href={"/carrito"}
                    className="bg-transparent hover:bg-blue-gray-200/50 w-full text-start rounded-lg p-1"
                  >
                    Carrito
                  </Link>
                </div>
              }
            />
          </li>
          {isOpenResumen &&
            createPortal(
              <ModalsContainter
                handleOpenResumenAction={handleOpenResumen}
                isOpenResumen={isOpenResumen}
              />,
              document.body
            )}
          <li className="flex gap-2">
            <MenulistGlobal
              keyProps={2}
              icon={
                <span className="flex items-center gap-2">
                  <PiUser size={20} color="white" className="cursor-pointer" />{" "}
                  {username}
                </span>
              }
              listaDelMenu={
                <div>
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
                </div>
              }
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
