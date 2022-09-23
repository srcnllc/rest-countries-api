import React, { useContext } from 'react'
import Detail from '../DetailComponent/Detail';
import Card from '../CardComponent/Card';
import { TemaVerisi } from '../../App'
import './Content.css'
import {
    Routes, Route
} from 'react-router-dom'



function Content({ typing, select, deger, deger2 }) {

    return (
        <div className='center' style={useContext(TemaVerisi)} >
            <Routes>
<<<<<<< HEAD
                <Route exact path="/rest-countries-api/" element={<Card deger2={deger2} typing={typing} select={select} deger={deger} />} />
                <Route path={`/rest-countries-api/:countriesName`} element={<Detail deger2={deger2} deger={deger} />} />
=======
                <Route exact path="/" element={<Card deger2={deger2} typing={typing} select={select} deger={deger} />} />
                <Route path={`/:countriesName`} element={<Detail deger2={deger2} deger={deger} />} />
>>>>>>> 36bcb55a3653306e2c9798db08662c2a35a8ce9c
            </Routes>
        </div>
    )
}
export default Content
