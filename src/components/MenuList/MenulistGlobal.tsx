"use client";
import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import React, { ReactNode } from "react";
interface MenulistGlobalProps {
  icon: ReactNode; // Ícono (componente de React)
  listaDelMenu: ReactNode; // Lista de elementos React
  keyProps: number;
}

export default function MenulistGlobal({
  icon,
  listaDelMenu,
  keyProps,
}: MenulistGlobalProps) {
  return (
    <Menu key={keyProps}>
      <MenuHandler>{icon}</MenuHandler>
      <MenuList
        className="flex flex-col items-start gap-2"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {listaDelMenu}
      </MenuList>
    </Menu>
  );
}
