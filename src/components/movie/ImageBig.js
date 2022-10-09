import React from 'react';
const ImageBig= ({path})=>{
    return <img style={{"height":"60vh"}} src={`https://image.tmdb.org/t/p/original${path}`}></img>
}
export default ImageBig; 