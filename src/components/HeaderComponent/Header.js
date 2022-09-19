import React from "react";
import "../HeaderComponent/Header.css";
function Header() {
  return (
    <div className="navBar">
      <div className="nav_Link">
        <h1>Where in the world?</h1>

        <p>
          <span className="material-symbols-outlined">dark_mode</span>Dark Mode
        </p>
      </div>
    </div>
  );
}

export default Header;
