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
  return (
    <>
      <Search typingStart={typingStart} getSelectValue={getSelectValue} style={(deger)} />
      <div className='Card' style={useContext(TemaVerisi)}>
        {countries.map((item, index) => {
          return (
            <div className='Card_item' key={index} >
              <Link className='link' to={`/Countries/${item.name}`} style={(deger)}>
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
