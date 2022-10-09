import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import { MoviePageStyled } from '../components/movie/MoviePage.styled';
const Movie = () => {
    const [isLoading,setLoading]= useState(true);
    const [Movie,setMovie]=useState(null);
    const [error,setError]=useState(false);
    const {Id}= useParams();
    useEffect(() => {
        setLoading(true);
        apiGet(`/movie?movieId=${Id.replace(':','')}`)
          .then(results => {setMovie(results.data);console.log(results.data)})
          .catch(err => {setError(true)});
          setLoading(false);
        return () => {
          
        };
      }, [Id]);
      if(!isLoading && !Movie && error){
        return <div>Unable to Get Movie, ID{Id} may be incorrect </div>
      }
      if(!isLoading && Movie){
      return(
        <MoviePageStyled>
          <div className='main'>
            <div className='title'>
              <h1>{Movie.title}</h1>
              
            </div>
          </div>
        </MoviePageStyled>)
    }
    return <div>Loading Data ...</div>
}
export default Movie; 