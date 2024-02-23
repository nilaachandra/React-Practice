import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full bg-red-300 flex justify-center items-center gap-6 p-4">
      <NavLink className={({isActive})=> `${isActive ? "active" : ""} uppercase font-bold text-xl hover:text-white`} to="/">Home</NavLink>
      <NavLink className={({isActive})=> `${isActive ? "active" : ""} uppercase font-bold text-xl hover:text-white`} to="/about">About</NavLink>
      <NavLink className={({isActive})=> `${isActive ? "active" : ""} uppercase font-bold text-xl hover:text-white`} to="/contact">Contact</NavLink>
      <NavLink className={({isActive})=> `${isActive ? "active" : ""} uppercase font-bold text-xl hover:text-white`} to="/connect">Connect</NavLink>
      <NavLink className={({isActive})=> `${isActive ? "active" : ""} uppercase font-bold text-xl hover:text-white`} to="/github">Github</NavLink>



    </div>
  );
}

export default Navbar;
