import React, { useState } from 'react';
import './App.css'
import Card from './components/CardComponent/Card';
import Header from './components/HeaderComponent/Header';
import Search from './components/searchComponent/Search';

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
    backgroundColor: "#2b3945"
  },
  light: {
    color: "black",
    backgroundColor: "#fff",
  }
}
export const TemaVerisi = React.createContext();
export const TemaVerisi2 = React.createContext();

function App() {
  const [typing, setTyping] = useState(" ");
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
  function typingStart(e) {
    setTyping(e.target.value);
    console.log(typing)
  }

  return (
    <div className="App" >
      <TemaVerisi.Provider value={deger}>
        <TemaVerisi2.Provider value={deger2}>
          <Header degistir={degistir} tema={tema} deger={deger} />
          <div className='container' style={(deger)} >
            <Search typingStart={typingStart} />
            <Card deger2={deger2} typing={typing} />
          </div>
        </TemaVerisi2.Provider>

      </TemaVerisi.Provider >
    </div >
  );
}

export default App;
