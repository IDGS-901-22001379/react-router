import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alet alert-info my-5">Loadin..... </div>
        )}
        <Outlet />
      </main>
      <footer>Hola</footer>
    </>
  );
};

export default LayoutPublic;
