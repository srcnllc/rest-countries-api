import React, { useState, useEffect } from 'react'
import Detail from '..//DetailComponent/Detail';
import Card from '../CardComponent/Card';
import axios from 'axios'
import {
    Routes, Route
} from 'react-router-dom'



function Content({ typing, select, deger, deger2 }) {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.com/v2/all`)
            .then(res => {
                setCountries(typing !== "" ? res.data.filter(item => item.name.toUpperCase().includes(typing.toUpperCase())) : res.data.filter(item => item.region.includes(select)))
            })
    }, [typing, select])
    return (
        <div className='center'>
            <Routes>
                <Route exact path="/Countries/" element={<Card deger2={deger2} typing={typing} select={select} countries={countries} />} />
                <Route path={`/Countries/:countriesName`} element={<Detail deger2={deger2} deger={deger} />} />
            </Routes>
        </div>
    )
}
export default Content
