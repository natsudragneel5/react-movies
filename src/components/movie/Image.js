import React from 'react';
const Image= ({path})=>{
    return <img style={{"height":"20vh"}} src={`https://image.tmdb.org/t/p/original${path}`}></img>
}
export default Image; 