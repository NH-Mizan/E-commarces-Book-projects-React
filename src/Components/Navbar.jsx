import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listbook'>Listed Book</NavLink></li>
    </>
    return (
        <div className=" bg-lime-300 mb-8 top-0 sticky z-[1] " >
            <div className='navbar max-w-7xl mx-auto' >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Book-Store</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 font-bold text-lg">
                      {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn btn-primary">Sign In</a>
                    <a className="btn ml-4 btn-secondary">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;