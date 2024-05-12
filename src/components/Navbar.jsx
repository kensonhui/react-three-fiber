import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center absolute top-0">
      <nav className="flex text-lg gap-6 font-medium z-10 mx-6 my-3">
        <NavLink to="/">
          <p>kenson hui</p>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          about
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          projects
        </NavLink>
        <NavLink
          to="/attributions"
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
