import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import FishLogo from '../assets/Fish-logo.png';
import Headerstyle from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerNavigation = {
    links: [
      { name: "Home", url: "/" },
      { name: "About us", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Contact", url: "/contact" },
    ],
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={Headerstyle.container}>
      <div className={Headerstyle.logoContainer}>
        <img src={FishLogo} alt="Fish Logo" />
        <label className={Headerstyle.text}>Central Texas Fly Fishing</label>
      </div>
      <div
        className={`${Headerstyle.nav} ${isMenuOpen ? Headerstyle.active : ""}`}
      >
        <ul>
          {headerNavigation.links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  isActive ? Headerstyle.activeLink : ""
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={Headerstyle.menuIcon} onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
