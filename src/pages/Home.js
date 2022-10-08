import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import MovieGrid from '../components/movie/MovieGrid'
const Home = () => {
  const [popular, setPopular] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
    useEffect(() => {
        apiGet(`/popular?page=1`)
          .then(response => {setPopular(response.data.results); console.log(response.data.results)})
          .catch(err => {console.log(err)});
        return () => {
          
        };
      }, []);
      const renderResults = () => {
        if (searchResults && searchResults.length === 0) {
          return <div>No Results</div>;
        }
        if (searchResults && searchResults.length > 0) {
          return <div>{searchResults[0].id}</div>
        }
        return null;
      };
      if (popular !== null) {
        return <MovieGrid data={popular}/>
      }
      return <div>Loading Data ...</div>
      
    
  };

export default Home;