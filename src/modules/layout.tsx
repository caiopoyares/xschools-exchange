import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
