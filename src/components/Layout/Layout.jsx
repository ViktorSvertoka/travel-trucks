import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="border-b border-badges py-6 bg-inputs relative">
        <div className="container flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
