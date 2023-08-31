import Nav from "./components/Nav";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <Nav />
      <body>{children}</body>
    </html>
  );
}
