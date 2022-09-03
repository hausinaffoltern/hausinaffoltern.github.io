import { Link } from 'react-router-dom';
import React from 'react';
import NavItems from './NavItems';
import styled from 'styled-components';

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.ul`
  text-align: right;
  list-style: none;
  margin: 20px 0;
  padding: 0;
`;

const Logo = styled.h1`
  display: flex;
  margin-right: 28px;
  margin-left: 10px;
  font-family: 'Caveat', cursive;
  font-size: 48px;
  a {
    text-decoration: none;
    color: #222;
    &:hover {
        color #585;
    }
  }
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 0 10px;
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    right: 0;
    margin: 10px 0;
    width: 1px;
    height: 16px;
    background: #ccc;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
  > a {
    text-decoration: none;
    color: #222;
    display: inline-block;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 16px;
    padding: 10px 15px; 
    &:hover {
      color: #fff;
      background: #9a9;
      transition: 0.3s ease;
    }
  }
  &:hover ul {
      display: flex;
      flex-direction: column;
  }
`;

const SubNavigation = styled.ul`
  display: none;
  background: #fff;
  text-align: left;
  list-style: none;
  margin: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 0;
  position: absolute;
  z-index: 2000;
  text-align: center;
  & li {
    border-bottom: 4px solid #fff;
    &:last-child {
      border-bottom: none;
    }
    padding: 0;
    a {
        line-height: 20px; 
        width: calc(100% - 30px);
    }
    &::after {
        display: none;
    }
  }
`;

const Header = () => {
  return (
    <TopContainer>
        <Logo>
            <Link to="/">
                Haus in Affoltern am Albis
            </Link>
        </Logo>
        <Navigation>
        <NavItem>
            <Link to="/haus/beschreibung">
                Das Haus
            </Link>
            <SubNavigation>
                <NavItems main="haus" />
            </SubNavigation>
        </NavItem>
        <NavItem>
            <Link to="/zimmer/eg">
                Räume
            </Link>
            <SubNavigation>
                <NavItems main="zimmer" />
            </SubNavigation>
        </NavItem>
        <NavItem>
            <Link to="/umgebung/lage">
                Umgebung
            </Link>
            <SubNavigation>
                <NavItems main="umgebung" />
            </SubNavigation>
        </NavItem>
        <NavItem>
            <Link to="/gallery">
                Impressionen
            </Link>
        </NavItem>
        <NavItem>
            <Link to="/kontakt">
                Kontakt
            </Link>
        </NavItem>
        </Navigation>
    </TopContainer>
  );
};

export default Header;
