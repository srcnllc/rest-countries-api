import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../CardComponent/Card.css'


function Card() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios.get(`https://restcountries.com/v2/all`)
      .then(res => {
        console.log(res.data)
        setCountries(res.data)
      })
  }, [])
  return (
    <div className='Card'>
      {countries.map((item, index) => {
        return (
          <div className='Card_item' key={index}>
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
