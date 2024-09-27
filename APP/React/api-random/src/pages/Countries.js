import React, { useState, useEffect } from 'react';

const Countries = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Klic API-ja za pridobitev podatkov o državi
    fetch('https://restcountries.com/v3.1/name/slovenia')
      .then(response => response.json())
      .then(result => {
        // API vrne seznam držav, zato vzamemo prvi objekt v seznamu
        setData(result[0]);
        setLoading(false); // Končamo z nalaganjem
      })
      .catch(error => {
        console.error('Napaka pri pridobivanju podatkov:', error);
        setLoading(false); // Končamo z nalaganjem tudi v primeru napake
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Nalagam podatke...</h1>
      ) : (
        <div>
           {data ?
           <div>
            <h1>{data.name.common}</h1>
            <h1>{data.name.official}</h1>
            <ul>
              <li>tld: {data.tld}  </li>
              <li>cca2: {data.cca2}  </li>
              <li>ccn3: {data.ccn3}  </li>
              <li>cca3: {data.cca3}  </li>
              <li>cioc: {data.cioc}  </li>
            </ul>
            </div>
             :"Ni podatkov"}
        </div>
      )}
    </div>
  );
};

export default Countries;
