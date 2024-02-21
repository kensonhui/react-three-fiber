import { NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <header className="flex items-center absolute top-0">
        <nav className="flex text-lg gap-6 font-medium z-10">
            <NavLink to="/">
                <p>KensonHui</p>
            </NavLink>
            <NavLink to="/about" 
                className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500": "text-black"}>
                Projects
            </NavLink>
        </nav>


    </header>
  )
}

export default Navbar