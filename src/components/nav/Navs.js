/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';
import SearchBar from './SearchBar';

const LINKS = [
  { to: '/', text: 'Home' },
];

const Navs = () => {
  const location = useLocation();
  return (
    <>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
        <SearchBar />
      </NavList>
    </>
  );
};

export default Navs;
