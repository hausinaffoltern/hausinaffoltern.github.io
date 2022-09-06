import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import NavItems from './NavItems';
import styled from 'styled-components';
import translations from "../common/translations";
import { LanguageContext } from '../../hooks/useStore';

const TopContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Language = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;
  width: 80px;
  margin-left: -40px; 
  align-items: center;
  background: white;
  justify-content: center;
  align-items: center;
  span {
    font-size: 12px;
    color: #9a9;
  }
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 24px;
    width: 10px;
    background: inherit;
  }
  &::after {
    right: 0px;
    transform: SkewX(-20deg);
    transform-origin: bottom left;
  }
  &::before {
    left: 0;
    transform: SkewX(20deg);
    transform-origin: bottom right;
  }
  @media print {
    display: none;
  }
`;
const Lng = styled.div`
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  color: ${props => props.active ? '#676' : '#222'};
  line-height: 24px;
  cursor: pointer;
  position: relative;
  height: 24px;
  padding: 0 5px;
`;


const Navigation = styled.ul`
  text-align: right;
  list-style: none;
  margin: 20px 0;
  padding: 0;
  @media (max-width: 679px) {
    margin: 2px 0 2px;
  }
  @media print  {
    display: none;
  }
`;

const Logo = styled.h1`
  display: flex;
  margin: 30px 28px 30px 10px;
  font-family: 'Caveat', cursive;
  font-size: 48px;
  a {
    text-decoration: none;
    color: #222;
    &:hover {
        color #585;
    }
  }
  @media (max-width: 679px) {
    margin: 0 28px 0 10px;
  }
  @media print {
    display: none;
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
  a.small {
    display: none;
  }
  &:hover ul {
      display: flex;
      flex-direction: column;
  }
  @media (max-width: 679px) {
    &::after {
      display: none;
    }
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
  @media (max-width: 679px) {
    display: none !important;
  }
`;

const Header = () => {
  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }

  const setDe = _ => {
    dispatch('de');
  }

  const setEn = _ => {
    dispatch('en');
  }

  return (
    <TopContainer>
        <Language>
          <Lng active={language === 'de'} onClick={setDe}>DE</Lng><span>|</span><Lng active={language === 'en'} onClick={setEn}>EN</Lng>
        </Language>
        <Logo>
            <Link to="/">
              {translations('h1', language)}
            </Link>
        </Logo>
        <Navigation>
        <NavItem>
            <Link to="/haus/beschreibung">
            {translations('navhaus', language)}
            </Link>
            <SubNavigation>
                <NavItems main="haus" />
            </SubNavigation>
        </NavItem>
        <NavItem>
            <Link to="/zimmer">
            {translations('navrooms', language)}
            </Link>
        </NavItem>
        <NavItem>
            <Link to="/umgebung/lage">
            {translations('navenv', language)}
            </Link>
            <SubNavigation>
                <NavItems main="umgebung" />
            </SubNavigation>
        </NavItem>
        <NavItem>
            <Link to="/gallery">
            {translations('navphotos', language)}
            </Link>
        </NavItem>
        <NavItem>
            <Link to="/kontakt">
            {translations('navcontact', language)}
            </Link>
        </NavItem>
        </Navigation>
    </TopContainer>
  );
};

export default Header;
