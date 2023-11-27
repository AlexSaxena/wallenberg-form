import { NavLink } from 'react-router-dom';
// import {Menu, X } from "lucide-react"

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Hem</NavLink>
      <NavLink to="/Form">Formulär</NavLink>
      <NavLink to="/Login">Admin</NavLink>
    </>
  );
};

const Nav = () => {
  return (
    <div className="w-1/3">
      <div className="flex justify-between">
        <NavLinks />
      </div>
    </div>
  );
};

export default Nav;
