import React from 'react'
import "../searchComponent/Search.css";


function Search() {
  return (
    <div className='SearchBar'>
      <input type="text" placeholder="Search for a country ..." />
      <select>
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