import React, { useState, useEffect } from 'react';

function Random() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://random-data-api.com/api/v2/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (

    <>
      <div>
        <h1> Ahoj</h1>
        {data ? <h2>{data.id}</h2> : 'Loading...'}
        {data ? <h2>{data.first_name}</h2> : 'Loading...'}
        {data ? <h2>{data.last_name}</h2> : 'Loading...'}
      </div>
      {/* <div>
        <h1> Ahoj</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      </div> */}
    </>

  );
}

export default Random;