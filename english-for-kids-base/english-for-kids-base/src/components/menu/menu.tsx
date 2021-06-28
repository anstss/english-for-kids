import "./menu.scss";
import React from "react";

const Menu = () => {

  return (
    <div className="menu">
      <ul className="menu-list list-group px-5">
        <li className="menu-item list-group-item">
          <a href="#">Cat1</a>
        </li>
        <li className="menu-item list-group-item">
          <a href="#">Cat2</a>
        </li>
        <li className="menu-item list-group-item">
          <a href="#">Cat3</a>
        </li>
        <li className="menu-item list-group-item">
          <a href="#">Cat4</a>
        </li>
        <li className="menu-item list-group-item">
          <a href="#">Cat5</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;