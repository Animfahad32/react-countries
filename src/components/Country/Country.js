import React from 'react';
import './Country.css';

const Country = (props) => {
    const {img, name, capital, region} = props.country;
    return (
        <div className="country">
            <img className="country-img " src={img} alt=""  />
            <h4>Country Name: {name}</h4>
            <h4>Capital: {capital}</h4>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;