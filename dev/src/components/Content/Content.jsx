import React, { useContext } from 'react';
import NavItems from '../Header/NavItems';
import NAV_ITEMS from '../common/Sitemap';
import styled from 'styled-components';
import translations from "../common/translations";
import { LanguageContext } from '../../hooks/useStore';

const Container = styled.div`
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  h2 {
    padding: 0 20px;
  }
  @media print {
    border-top: 1px solid #9a9;
    box-shadow: none;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 679px) {
    flex-direction: column;
  }
`;

const LeftNav = styled.ul`
  margin: 0 10px;
  padding: 0;
  & li {
    padding: 0;
    a {
        line-height: 20px; 
        width: calc(100% - 30px);
    }
    a.big {
      display: block;
    }
    a.small {
      display: none;
    }
    &::after {
        display: none;
    }
  }
  @media (max-width: 679px) {
    display: flex;
    & li {
      padding: 0;
      a.big {
        display: none;
      }
      a.small {
        display: block;
      }
    }
  }
  @media print {
    display: none;
  }
`;

const Image = styled.div`
  height: 400px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  img {
    display: none;
  }
  @media (max-width: 1009px) {
    height: 300px;
  }
  @media (max-width: 679px) {
    height: 200px;
  }
  @media print {
    height: auto;
    img {
      display: ${props => props.page === 'detailbeschrieb' || props.page === 'renovierungen' ? 'none' : 'block'};
      width: 100%;
    }
  }
`;

const Content = ({main, sub}) => {
  const { language } = useContext(LanguageContext);
  if(!language) {
    return <></>;
  }
  
  const currentMain = NAV_ITEMS.find(item => item.key === main) || {};
  const current = currentMain.submenu && currentMain.submenu.length ? currentMain.submenu.find(item => sub === item.key) : {};
  const renderContent = () => current.component || currentMain.component || <>no comp</>
  const subtitle = translations(current.value, language) || translations(currentMain.value, language) || '';

  const Img = ({src, title, page}) => <Image bg={src} page={page}><img src={src} alt={title} /></Image>
  return (
    <Container>
      {(current.image && <Img page={current.key} src={current.image} title={current.value} />) || (currentMain.image && <Img page={currentMain.key} src={currentMain.image} title={currentMain.value} />)}
      <h2>{subtitle}</h2>
      <ContentContainer>
        {currentMain.submenu && (<LeftNav><NavItems main={main} active={sub} /></LeftNav>)}
        {renderContent()}
      </ContentContainer>
    </Container>
  );
};

export default Content;
