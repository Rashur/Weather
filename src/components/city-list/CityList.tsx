import React, {useState} from 'react';
import CityListElement from "../city-list-element/CityListElement";
import './city-list.css'

const CityList = () => {
    const cityList = [
        {city: 'London', tag: 'us'},
        {city: 'Minsk', tag: 'by'},
        {city: 'Brest', tag: 'by'},
        {city: 'Egypt', tag: 'eg'},
        {city: 'Vatican', tag: 'va'}]

    return (
        <div className='city-list-container'>
            {cityList.map(city =>
                <CityListElement city={city.city} tag={city.tag}/>
            )}
        </div>
    );
};

export default CityList;