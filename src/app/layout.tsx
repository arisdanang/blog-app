import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/footer/Footer";
import QueryProvider from "./provider/QueryProvider";
import Provider from "./provider/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synapsis Blog",
  description: "Synapsis Frontend Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <QueryProvider>
            <div className="max-w-[30rem] md:max-w-[40rem] lg:max-w-[48rem] xl:max-w-[64rem] 2xl:max-w-[85rem] mx-auto 2xl:px-20 px-10 min-h-screen">
              <Navbar />
              {children}
              <Footer />
            </div>
          </QueryProvider>
        </Provider>
      </body>
    </html>
  );
}
