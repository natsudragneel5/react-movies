import React, { useEffect } from 'react';
import { apiGet } from '../misc/config';
const Movie = () => {
    useEffect(({movieId}) => {
        apiGet(`/movie?movieId=${movieId}`)
          .then(results => {console.log(results)})
          .catch(err => {console.log(err)});
        return () => {
          
        };
      }, []);
    return (<div>This is Movie page</div>
    );
  };

export default Movie;