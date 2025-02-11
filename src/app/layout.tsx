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
// [background:radial-gradient(115%_125%_at_50%_10%,#3D3D3D_45%,#63e_100%)]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} ${tajawal.className}`}>
        <main className=" inset-0 -z-10 min-h-screen w-full  bg-cover">
          <Nav />
          {children}
        </main>
        <footer>footer global</footer>
      </body>
    </html>
  );
}
