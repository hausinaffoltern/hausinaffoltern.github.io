import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import styled from 'styled-components';
import translations from "../common/translations";
import { LanguageContext } from '../../hooks/useStore';

const BottomContainer = styled.div`
  text-align: center;
  a {
    color: #9a9;
    text-decoration: none;
    &:hover {
      color: #676
    }
  }
  @media print {
    border-top: 1px solid #9a9;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const DSConttainer = styled.span`
  @media print {
    display: none;
  }
`;

const Footer = () => {
  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }
  return (
    <BottomContainer>
      <p> hausinaffoltern.online &copy; <DSConttainer>| <Link to="datenschutz">{translations('privacy', language)}</Link> |</DSConttainer> <Link
            to='#'
            onClick={(e) => {
                window.location.href = "mailto:info@hausinaffoltern.online?subject=Anfrage von Haus in Affoltern am Albis | hausinaffoltern.online";
                e.preventDefault();
            }}
        >info@hausinaffoltern.online</Link></p>
    </BottomContainer>
  );
};

export default Footer;