import type { Metadata } from "next";
import { Toaster, toast } from 'sonner';
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/config/Context";

const inter = Inter({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-inter"
});
const lato = Lato({
   weight: ["100", "300", "400", "700", "900"],
   subsets: ["latin"],
   display: "swap",
   variable: "--font-lato"
});

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app"
};

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.className} ${lato.variable}`}>
            <AuthProvider>
               <Toaster />
               {children}
            </AuthProvider>
         </body>
      </html>
   );
}
