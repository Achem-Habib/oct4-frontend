import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/nav/Navbar";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./GlobalProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OCT4",
  description: "A shop which have the potential to meet your expectation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <ToastContainer />
          <div className="mx-auto  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 min-h-screen">
            <Navbar />

            <Breadcrumb />
            {children}
          </div>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
