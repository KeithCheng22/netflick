import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NetFlick",
  description: "Your favourite movies, all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black bg-opacity-90 p-10`}>
        <div className="w-full max-w-[1200px] mx-auto">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
