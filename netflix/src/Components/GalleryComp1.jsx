import React, { useState, useEffect } from 'react';

const Chiamata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://www.omdbapi.com/?apikey=3fc676c&s=harry%20potter');
      const data = await response.json();
      console.log(data.Search);
      setData(data.Search);
    };
    fetchData();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
    {data && data.map((item) => (
  <div className="col mb-2 px-1" key={item.imdbID}>
    <img className="img-fluid" src={item.Poster} alt="movie picture" />
  </div>
))}
    </div>
  );
};

export default Chiamata; 