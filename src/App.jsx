import React, { useState } from 'react';
import './App.css'
import Content from './components/ContentComponent/Content';
import Header from './components/HeaderComponent/Header';

import {
  BrowserRouter
} from 'react-router-dom'

const tema = {
  dark: {
    color: "white",
    backgroundColor: "#202c37"
  },
  light: {
    color: "black",
    backgroundColor: "#fafafa",
  }
}
const tema2 = {
  dark: {
    color: "white",
    backgroundColor: "#2b3945",
  },
  light: {
    color: "black",
    backgroundColor: "#fff",
  }
}
export const TemaVerisi = React.createContext();
export const TemaVerisi2 = React.createContext();

function App() {

  const [deger, setDeger] = useState(tema.light);
  const [deger2, setDeger2] = useState(tema2.light);

  function degistir() {
    if (tema.dark === deger) {
      setDeger(tema.light)
      setDeger2(tema2.light)
      console.log(deger)

    }
    else {
      setDeger(tema.dark)
      setDeger2(tema2.dark)
      console.log(deger)

    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <TemaVerisi.Provider value={deger}>
          <TemaVerisi2.Provider value={deger2}>
            <Header degistir={degistir} tema={tema} deger={deger} />
            <Content deger={deger} />
          </TemaVerisi2.Provider>
        </TemaVerisi.Provider >
      </BrowserRouter>
    </div >
  );
}

export default App;
