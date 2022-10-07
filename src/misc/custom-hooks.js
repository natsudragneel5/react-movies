import { useState, useEffect, useReducer } from 'react';
import { apiGet } from './config';

export function useShow(movieId) {
    const [state, dispatch] = useReducer(reducer, {
      movie: null,
      isLoading: true,
      error: null,
    });
  
    useEffect(() => {
      apiGet(`/movie?movieId=${movieId}`)
        .then(results => {console.log(results)})
        .catch(err => {console.log(err)}
        );
      return () => {};
    }, [movieId]);
    return state;
  }