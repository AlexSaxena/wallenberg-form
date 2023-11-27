import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-1/3 flex justify-end">
        <div className="hidden w-full md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
