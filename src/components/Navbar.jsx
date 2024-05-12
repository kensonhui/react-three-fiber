import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center absolute top-0">
      <nav className="flex text-lg gap-6 font-medium z-10 mx-6 my-3">
        <NavLink to="/react-three-fiber">
          <p>kenson hui</p>
        </NavLink>
        <a href="https://kensonhui.github.io">portfolio</a>
        <NavLink
          to="/react-three-fiber/attributions"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          attributions
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
