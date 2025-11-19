import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataProvider } from "../Provider/Provider";


const Nav = () => {
    const list =<>
    <li><NavLink to='/Login'>Login</NavLink></li>
    <li><NavLink to='/Resister'>Resister</NavLink></li>
    <li><NavLink to='/Dashboard'>Dashboard</NavLink></li>
    </>
    const {focus,logout} =useContext(DataProvider)
    const logoutt=()=>{
      logout()
      .then(()=>{
        console.log('logout')
        alert('You want to logout your account?')
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }
    return (
        <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {
                list
             }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {list}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={focus?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li className="cursor-pointer" onClick={logoutt}>Logout</li>
      </ul>
    </div>
  </div>
        </div>
      
    );
};

export default Nav;