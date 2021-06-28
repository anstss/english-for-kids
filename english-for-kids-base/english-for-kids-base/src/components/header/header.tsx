import "./header.scss";
import React from "react";

const Header = () => {
  return (
    <header className='header d-flex justify-content-between align-items-center px-5 navbar-dark bg-primary'>
      <div>Menu</div>
      <h1 className='title'>English For Kids</h1>
      <div className="form-check form-switch switch-container">
        <input className="form-check-input switcher" type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label switch-label" htmlFor="flexSwitchCheckDefault">Train</label>
      </div>
    </header>
  )
}

export default Header;