import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="border-b border-badges py-6 px-16 bg-inputs flex items-center justify-between relative">
        <Logo />
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
