import { Outlet } from "react-router-dom";
import React from "react";
import { Header, Navbar } from "../component";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
