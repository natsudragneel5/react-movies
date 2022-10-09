import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SearchBar = ()=>{
    const [searchValue,setSearchValue]= useState('');
    const updateSearchValue= e =>{
        setSearchValue(e.target.value)
    }
    return (<>
        <input type="text" value={searchValue} onChange={updateSearchValue}  placeholder="Search.." />
        <button>
            <Link to={`/search:${searchValue}`}>
            Search
            </Link>
        </button>
    </>);
}
export default SearchBar;