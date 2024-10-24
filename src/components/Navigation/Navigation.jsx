import { NavLink } from "react-router-dom";
import clsx from "clsx";

const activeLink = ({ isActive }) => {
  return clsx(
    "text-main transition-transform duration-250 ease-in-out hover:scale-105",
    isActive ? "text-buttonHover !text-buttonHover" : "hover:text-buttonHover"
  );
};

const Navigation = () => {
  return (
    <nav className="flex gap-8 justify-start font-medium text-lg absolute left-1/2 transform -translate-x-1/2">
      <NavLink to="/" className={activeLink}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={activeLink}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" className={activeLink}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
