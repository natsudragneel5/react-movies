import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import ImageBig from '../components/movie/ImageBig'
import { MoviePageStyled } from '../components/movie/MoviePage.styled';
const Movie = () => {
    const [isLoading,setLoading]= useState(true);
    const [Movie,setMovie]=useState(null);
    const [error,setError]=useState(false);
    const {Id}= useParams();
    useEffect(() => {
        setLoading(true);
        apiGet(`/movie?movieId=${Id.replace(':','')}`)
          .then(results => {setMovie(results.data);})
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
              <h1>&nbsp;{Movie.title}</h1>
            </div>
            <div className='data'>
              <ImageBig path={Movie.backdrop_path} />

              <div>Budget:</div>
              <p>{Movie.budget}</p>
              <div>Release Date:</div>
              <p>{Movie.release_date}</p>
              <div>Description:</div>
              <p>{Movie.overview}</p>

            </div>
          </div>
        </MoviePageStyled>)
    }
    return <div>Loading Data ...</div>
}
export default Movie; 