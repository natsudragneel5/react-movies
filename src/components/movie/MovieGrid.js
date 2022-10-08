import React from 'react';
import { FlexGrid } from './styled';
import MovieCard from './MovieCard';
const MovieGrid = ({data})=>{
    return (<FlexGrid >{data.map(( mov ) => {
        console.log(mov.title);
        return (<MovieCard
            key={mov.id}
            id={mov.id}
            name={mov.title}
            summary={mov.overview}
          />)
        })}
        </FlexGrid>)
    
}
export default MovieGrid;