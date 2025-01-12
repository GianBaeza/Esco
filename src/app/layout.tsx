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
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>a</footer>
      </body>
    </html>
  );
}
