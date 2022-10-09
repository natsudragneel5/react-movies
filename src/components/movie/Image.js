import React from 'react';
const Image= ({path})=>{
    return <img style={{"height":"20vh","width":"11.5vw","marginLeft":"1.8vw"}} src={`https://image.tmdb.org/t/p/original${path}`}></img>
}
export default Image; 