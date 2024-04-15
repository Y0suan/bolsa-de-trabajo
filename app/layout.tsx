import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from "geist/font/sans";
import NavbarStyle from "@/components/navbarStyle";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
		<NavbarStyle/>
		{children}</body>
    </html>
  )
}