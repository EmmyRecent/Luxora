import type { Metadata } from "next";
import { Dancing_Script, Poppins } from "next/font/google";
import "./app.css";

const dancingFont = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
});

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Luxoura",
  description: "A place to find your new home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} ${dancingFont.variable} bg-gradient-to-r from-[#FCEDE1] to-[#FBD2B1] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
