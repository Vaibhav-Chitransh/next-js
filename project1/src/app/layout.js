import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap'
})

export const metadata = {
  title: "Travel guide mini project",
  description: "Basic project to clear the fundamentals of next-js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className={`${poppins.className} w-screen h-screen bg-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
