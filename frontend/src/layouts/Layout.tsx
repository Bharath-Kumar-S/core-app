import React from "react";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const location = window.location.pathname;
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {location === "/" && <Banner />}
      <div className=" container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
