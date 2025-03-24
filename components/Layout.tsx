import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
