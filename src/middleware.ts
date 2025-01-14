import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const routesPrivadas = ["/Productos"];

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");

  if (routesPrivadas.includes(request.nextUrl.pathname)) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/login", "/home", "/productos"],
};
