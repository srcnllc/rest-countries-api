import React, { useContext } from 'react'
import Detail from '..//DetailComponent/Detail';
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
                <Route exact path="/Countries/" element={<Card deger2={deger2} typing={typing} select={select} deger={deger} />} />
                <Route path={`/Countries/:countriesName`} element={<Detail deger2={deger2} deger={deger} />} />
            </Routes>
        </div>
    )
}
export default Content
