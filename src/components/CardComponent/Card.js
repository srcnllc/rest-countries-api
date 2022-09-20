import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import '../CardComponent/Card.css'
import { TemaVerisi } from '../../App'

function Card({ deger2, typing, select }) {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/all`)
      .then(res => {
        console.log(res.data)
        setCountries(typing != "" ? res.data.filter(item => item.name.toUpperCase().includes(typing.toUpperCase())) : res.data.filter(item => item.region.includes(select)))
      })
  }, [typing, select])
  return (
    <div className='Card' style={useContext(TemaVerisi)}>
      {countries.map((item, index) => {
        return (
          <div className='Card_item' key={index} style={deger2}>
            <img src={item.flag} alt="img" />
            <h2>{item.name}</h2>
            <p><span>Population:</span>{item.population}</p>
            <p><span>Region:</span>{item.region}</p>
            <p><span>Capital:</span>{item.capital}</p>
          </div>)
      })}
    </div>
  )
}

export default Card
