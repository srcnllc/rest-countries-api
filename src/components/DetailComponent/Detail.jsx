import React, { useState, useEffect, useContext } from 'react'
import '../DetailComponent/Detail.css'
import { TemaVerisi } from '../../App'
import backIcon from './arrow_back.png'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

function Detail({ deger, deger2 }) {
    let { countriesName } = useParams();
    const [countriesData, setCountriesData] = useState([]);
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countriesName}`)
            .then(res => {
                setCountriesData(res.data)
            })
    }, [countriesName])

    return (
        <div className='content' style={useContext(TemaVerisi)}>
            <div className='backDetail'>
                <Link className='link' to={`/`}>
                    <button style={deger}><img src={backIcon} alt='icons' />Back</button>
                </Link>
            </div>
            <div className='contentDetail'>
                <div className='image'>
                    {countriesData && countriesData.map((item, id) => {
                        return (
                            <img key={id} src={`https://flagcdn.com/${item.altSpellings[0].toLowerCase()}.svg`} alt={'belgium'} />                            )
                    })}
                </div>
                <div className='info'>
                    <div className='title'>
                        <h1>{countriesName}</h1>
                    </div>
                    {countriesData && countriesData.map((item, id) => {
                        return (
                            <div className='infoContent' key={id}>

                                <div className='contentLeft' >
                                    <p>Native Name:{item.name.common}</p>
                                    <p>Populatıon:{item.population}</p>
                                    <p>Region:{item.region}</p>
                                    <p>Sub Region:{item.subregion}</p>
                                    <p>Capital:{item.capital}</p>
                                </div>

                                <div className='contentRight'>
                                    <p>Top Level Domain:{item.tld}</p>
                                    <p>Currencies:{Object.keys(item.currencies).map(i => { return i })}</p>
                                    <p>Languages:{Object.values(item.languages).map(i => { return i })}</p>
                                </div>
                            </div>
                        )
                    })}
                    <div className='buttons' >
                        <p>Border Countries:</p>
                        {countriesData && countriesData.map((item, id) => {
                            return (
                                <div className='butonlar' style={deger2} key={id}>
                                    {item.borders ? 
                                       item.borders.map((i, id) => {
                                         return (
                                           <p key={id}>{i}</p>
                                        )
                                        })
                                    :null}
  
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Detail
