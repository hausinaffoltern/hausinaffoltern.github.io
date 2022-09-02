import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const BottomContainer = styled.div`
  text-align: center;
  background: #f5f5f5;  
  a {
    color: #9a9;
    text-decoration: none;
    &:hover {
      color: #686
    }
  }
`;

const Footer = () => {
  return (
    <BottomContainer>
      <p> hausinaffoltern.online &copy; &nbsp; &nbsp; &nbsp; &nbsp; E-mailaddresse: <Link
            to='#'
            onClick={(e) => {
                window.location.href = "mailto:hausinaffoltern@eclipso.ch?subject=Anfrage von Haus in Affoltern am Albis | hausinaffoltern.online";
                e.preventDefault();
            }}
        >hausinaffoltern@eclipso.ch</Link></p>
    </BottomContainer>
  );
};

export default Footer;