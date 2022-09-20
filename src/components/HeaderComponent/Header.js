import React, { useContext } from 'react'
import "../HeaderComponent/Header.css";
import { TemaVerisi2 } from '../../App'


function Header({ tema, deger, degistir }) {
  return (
    <div className="navBar" style={useContext(TemaVerisi2)}>
      <div className="nav_Link">
        <h1>Where in the world?</h1>

        <p onClick={degistir}>
          <span className="material-symbols-outlined">dark_mode</span>{tema.dark === deger ? " Light Mode" : "Dark Mode"}
        </p>
      </div>
    </div>
  );
}

export default Header;
