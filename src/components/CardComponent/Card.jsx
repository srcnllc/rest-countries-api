import React, { useState, useContext, useEffect } from 'react'
import '../CardComponent/Card.css'
import { TemaVerisi } from '../../App'
import { Link } from 'react-router-dom'
import Search from '../searchComponent/Search';
import axios from 'axios'



function Card({ deger }) {
  const [typing, setTyping] = useState("");
  const [select, setSelect] = useState("")
  const [countries, setCountries] = useState([])
  function typingStart(e) {
    setTyping(e.target.value);
  }
  function getSelectValue(e) {
    setSelect(e.target.value)
  }

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/all`)
      .then(res => {
        setCountries(typing !== "" ? res.data.filter(item => item.name.toUpperCase().includes(typing.toUpperCase())) : res.data.filter(item => item.region.includes(select)))
      })
  }, [typing, select])
  console.log(countries)
  return (
    <>
      <Search typingStart={typingStart} getSelectValue={getSelectValue} style={(deger)} />
      <div className='Card' style={useContext(TemaVerisi)}>
        {countries.map((item, index) => {
          return (
            <div className='Card_item' key={index} >
<<<<<<< HEAD
              <Link className='link' to={`/rest-countries-api/${item.name}`} style={(deger)}>
=======
              <Link className='link' to={`/${item.name}`} style={(deger)}>
>>>>>>> 36bcb55a3653306e2c9798db08662c2a35a8ce9c
                <img src={item.flag} alt="img" />
                <h2 >{item.name}</h2>
                <p><span>Population:</span>{item.population}</p>
                <p><span>Region:</span>{item.region}</p>
                <p><span>Capital:</span>{item.capital}</p>
              </Link>
            </div>

          )
        })}
      </div>
    </>
  )
}

export default Card
