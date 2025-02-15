import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const routesPrivadas = ["/productos", "/carrito"];

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;

  // Si el usuario ya tiene un accessToken y trata de acceder a /login, redirigirlo a la página principal
  if (pathname === "/login" || (pathname === "/" && accessToken)) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Si la ruta no es privada, continuar con la solicitud normal
  if (!routesPrivadas.includes(pathname)) {
    return NextResponse.next();
  }

  // Si no hay accessToken en una ruta privada, redirigir a login
  if (!accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Configuración para que el middleware solo se ejecute en las rutas indicadas
export const config = {
  matcher: ["/", "/login", "/carrito", "/productos/:path*"],
};
