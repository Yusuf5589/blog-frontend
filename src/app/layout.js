import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Index";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kle Blog",
  description: "Bu benim blog projem, buralarda yeni teknolojiler hakk ı nda bilgiler ve yeni haberler payla şı yorum.",
  authors: [{name: "Yusuf Kapkiner"}]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
