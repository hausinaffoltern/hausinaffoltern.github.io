import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NAV_ITEMS from '../common/Sitemap';
import translations from "../common/translations";
import { LanguageContext } from '../../hooks/useStore';


const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  a {
    text-decoration: none;
    color: ${props => props.active ? '#fff' : '#222'};
    background: ${props => props.active ? '#9a9' : 'transparent'};
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
`;

const NavItems = ({main, active}) => {
  const { language } = useContext(LanguageContext);
  if(!language) {
    return <></>;
  }
  //value: language && translations('navoverview', language),

  return (
    <>
      {NAV_ITEMS.find(item => item.key === main).submenu.map(({key,value, shortvalue}) => (
        <NavItem key={key} active={active === key}>
            <Link className="big" to={`/${main}/${key}`}>
                {translations(value, language)}
            </Link>
            <Link className="small" to={`/${main}/${key}`}>
                {translations(shortvalue, language) || translations(value, language)}
            </Link>
        </NavItem>
      ))}
    </>
  )
};

export default NavItems;
