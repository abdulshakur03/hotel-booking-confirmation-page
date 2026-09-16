import React from 'react'
import Logo from './Logo'
import  "../css/Nav.css"

export default function Nav() {
  return (
    <div className="nav">
      <Logo />
      <img src="src/assets/images/icon-menu.svg" alt="menu" className='menu-btn'/>
    </div>
  );
}
