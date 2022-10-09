import React, {useState, useEffect } from 'react';
import { apiGet } from '../misc/config';
import MovieGrid from '../components/movie/MovieGrid'
const Home = () => {
  const [popular, setPopular] = useState(null);
    useEffect(() => {
        apiGet(`/popular?page=1`)
          .then(response => {setPopular(response.data.results);})
          .catch(err => {console.log(err)});
        return () => {
        };
      }, []);
      if (popular !== null) {
        return (<div>
                  <MovieGrid data={popular}/>
                </div>);
      }
      return <div>Loading Data ...</div>
  };

export default Home;