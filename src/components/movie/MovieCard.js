import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCardStyled } from './MovieCard.styled';
import Image from './Image';
const MovieCard = ({ id, image, name, summary}) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 8).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <MovieCardStyled>
        <Link style={{"textDecoration":"none"}} to={`/movie:${id}`}>
            <div className="card">
            <div className="title"><h1>{name}</h1></div>
            <Image path={image}/> 
            <p className="data">{summaryAsText}</p>
            </div>
        </Link>
    </MovieCardStyled>
  );
};
export default MovieCard;
