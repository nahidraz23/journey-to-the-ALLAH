import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <div className="flex gap-4">
        <NavLink to={'/'}>
            <img className="w-20 h-20 p-0" src="../../../images/calligraphy-bismillahir-rahmanir-rahim.png" alt="" />
        </NavLink>
    </div>

    return (
        <div className="navbar bg-base-100 p-2 bg-opacity-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="lg:text-xl font-semibold">Journey To The ALLAH</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="flex gap-3">
                <NavLink to={'/blog'}><li className="btn rounded-xl">
                        <a href="">
                            Blog
                        </a>
                    </li></NavLink>
                    <NavLink className="btn border-2 rounded-xl" to={'/login'}> <li>
                        <a href="">
                            Login
                        </a>
                    </li>
                    </NavLink>
                    <NavLink className="btn border-2 rounded-xl" to={'/register'}><li>
                        <a href="">
                            Register
                        </a>
                    </li></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;