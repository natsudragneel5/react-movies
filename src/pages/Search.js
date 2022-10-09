import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import MovieGrid from '../components/movie/MovieGrid'

const Search = ()=>{
    const [searchResults, setSearchResults] = useState(null);
    const {Query}= useParams();
    useEffect(() => {
        apiGet(`/search?page=1&query=${Query.replace(':','')}`)
          .then(response => {setSearchResults(response.data.results);})
          .catch(err => {console.log(err)});
        return () => {
        };
      }, [Query]);
    if (searchResults !== null) {
        return (<div>
                  <MovieGrid data={searchResults}/>
                </div>);
      }
    return <div>Loading Data ...</div>
}
export default Search;