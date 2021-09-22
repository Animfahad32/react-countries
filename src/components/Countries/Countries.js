import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR2PUdvDeMtpEbIf3Vkxa1Q_dl6UvZoCEel525CYDOA8IoFRa7533i2iKhM')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    return (
        <div>
           <h1>Rest Countries</h1>
           <h3>Total Countries : {countries.length}</h3> 
          <div className="countries">
          {
               countries.map(country => <Country 
                key = {country.alpha2Code}
                country={country}
                
                ></Country>)
            }
          </div>
        </div>
    )
};

export default Countries;