import React, { useContext } from 'react'
import "../searchComponent/Search.css";
import { TemaVerisi2 } from '../../App'



function Search({ typingStart, getSelectValue }) {
  return (
    <div className='SearchBar' >
      <input type="text" placeholder="Search for a country ..." style={useContext(TemaVerisi2)} onChange={typingStart} />
      <select style={useContext(TemaVerisi2)} onChange={getSelectValue}>
        <option defaultValue="Filter by Region">Filter by Region</option>
        <option defaultValue="Affrica">Affrica</option>
        <option defaultValue="America">America</option>
        <option defaultValue="Asia">Asia</option>
        <option defaultValue="Europe">Europe</option>
        <option defaultValue="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Search