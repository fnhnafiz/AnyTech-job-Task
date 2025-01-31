import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
const MainLayout = () => {
  return (
    <div>
      <header className="max-w-7xl">
        <Navbar />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <section>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
