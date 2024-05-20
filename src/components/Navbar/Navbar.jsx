
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {


    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/update">Update Profile</NavLink></li>
        <li><NavLink to="/user">User Profile</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </>

    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl font-bold">Real-Estate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="navbar-end">

                {
                    user ? <div className=" navbar-end flex gap-2 -10">

                        <img className="rounded-full w-16 h-16" src={user.photoURL} alt="" />
                        <h2 className="my-3">{user.displayName}</h2>
                        <h2 className="my-3">{user.email}</h2>
                        <button onClick={() => logOut()} className="btn btn-accent">Logout</button>
                    </div> : <Link to="/login">
                        <button className="btn btn-accent">Login</button>
                    </Link>

                }

            </div>
            <div className="">

            </div>




        </div>
    );
};

export default Navbar;