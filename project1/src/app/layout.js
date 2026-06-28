import { Poppins } from "next/font/google";
import "./globals.css";

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
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
