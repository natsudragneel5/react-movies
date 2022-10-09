import React, { useEffect, useState } from 'react';
import { FlexGrid } from './styled';
import { FilterList } from './FilterStyled';
import MovieCard from './MovieCard';
const MovieGrid = ({data})=>{
  const [isLoading,setLoading] = useState(true);
  const [currYear,setCurrYear] = useState(null);
  const [years,setYears] = useState(null);
  const [display,setDiplay] = useState(null);
  useEffect(() => {
    setLoading(true);
    const values= Array.from(new Set (data.map(e => {return String(e.release_date).substring(0,4)}))).sort().reverse();
    setYears(values);
    setCurrYear('all');
    setLoading(false);
    return () => {
    };
  }, [data]);
  useEffect(() => {
    setLoading(true);

    if(currYear !== null){
    setDiplay(data.filter(e=>{return String(e.release_date).substring(0,4)===currYear}));
  }
  else{
    setDiplay(data);
  }
  if(currYear === 'all'){
    setDiplay(data);
  }
  setLoading(false);
    return () => {
    };
  }, [currYear]);

  const updateCurrYear= e =>{
    setLoading(true);
    setCurrYear(e.target.value)
    setLoading(false);
  }
  if(!isLoading){
    return (
    <><FilterList>Year :&nbsp;&nbsp;<select value={currYear} onInput={updateCurrYear}><option key="all" value="all">all</option>{years.map((year)=>{return <option key={year} value={year}>{year}</option>})}</select></FilterList>
      <FlexGrid >{display.map(( mov ) => {
        return (<MovieCard
            key={mov.id}
            id={mov.id}
            name={mov.title}
            image={mov.poster_path}
            summary={mov.overview}
          />)
        })}
        </FlexGrid></>)
  }
}
export default MovieGrid;