import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="text-white mx-2">
        Hem
      </NavLink>
      <NavLink to="/studentform" className="text-white mx-2">
        Formulär
      </NavLink>
      <NavLink to="/Login" className="text-white mx-2">
        Admin
      </NavLink>
      <NavLink to="/Studenter" className="text-white mx-2">
        Studenter
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  // Close burger menu when window is resized beyond the mobile breakpoint
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-1/3 flex justify-end">
        <div className="hidden w-full md:flex justify-between items-center">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center w-full bg-blue-800">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
