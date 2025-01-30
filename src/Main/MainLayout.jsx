import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
const MainLayout = () => {
  return (
    <div>
      <header className="max-w-7xl">
        <Navbar />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
