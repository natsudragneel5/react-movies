import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
const Home = () => {
    useEffect(() => {
        apiGet(`/popular?page=1`)
          .then(results => {console.log(results.data.results[0])})
          .catch(err => {console.log(err)});
        return () => {
          
        };
      }, []);
    return (<div>This is home page</div>
    );
  };

export default Home;