import { Lora, Tajawal as TajawalFont } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const lora = Lora({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const tajawal = TajawalFont({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} ${tajawal.className}`}>
        {/* Contenedor principal */}
        <div className="flex flex-col">
          {/* Fondo con imagen y capa semitransparente */}
          <div className="absolute inset-0 bg-background-login bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Contenido principal */}
          <div className="relative z-10 flex-1 min-h-screen">
            <Nav />
            {children}
          </div>
          <footer className="relative z-10 text-center bg-black bg-opacity-75 text-white">
            footer global
          </footer>
        </div>
      </body>
    </html>
  );
}
