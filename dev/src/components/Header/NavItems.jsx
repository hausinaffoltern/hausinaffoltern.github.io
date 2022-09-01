import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import NAV_ITEMS from '../common/Sitemap';

const NavItem = styled.li`
  display: block;
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

const NavItems = ({main, active}) => (
  <>
    {NAV_ITEMS.find(item => item.key === main).submenu.map(({key,value}) => (
      <NavItem key={key} active={active === key}>
          <Link to={`/${main}/${key}`}>
              {value}
          </Link>
      </NavItem>
    ))}
  </>
);

export default NavItems;
