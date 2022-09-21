import React, { useContext } from 'react'
import '../CardComponent/Card.css'
import { TemaVerisi } from '../../App'
import { Link } from 'react-router-dom'

function Card({ deger2, countries }) {

  return (
    <div className='Card' style={useContext(TemaVerisi)}>
      {countries.map((item, index) => {
        return (
          <Link style={{ textDecoration: 'none', color: "black" }} key={index} to={`/Countries/${item.name}`}>
            <div className='Card_item' style={deger2}>
              <img src={item.flag} alt="img" />
              <h2>{item.name}</h2>
              <p><span>Population:</span>{item.population}</p>
              <p><span>Region:</span>{item.region}</p>
              <p><span>Capital:</span>{item.capital}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Card
