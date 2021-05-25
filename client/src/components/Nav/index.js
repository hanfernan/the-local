import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  const [click, setClick] = useState(false);

  //reverses state of menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" onClick={closeMobileMenu} className="navbar-logo">
            The Local <i className='far fa-smile' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/search' onClick={closeMobileMenu} className='nav-links'>
                Search
              </Link>
            </li>
            <li className='nav-item'>
                {/* TODO: link to specific band profile based on ID */}
              <Link to='/my-band' onClick={closeMobileMenu} className='nav-links'>
                Edit Band Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/logout' onClick={closeMobileMenu} className='nav-links'>
                Logout
              </Link>
            </li>            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
