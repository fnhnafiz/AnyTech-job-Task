import React from "react";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <header>
        <h1 className="text-center text-3xl font-bold">
          navbar <button className="btn">Click </button>
        </h1>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
