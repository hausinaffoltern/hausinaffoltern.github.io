import React from 'react';
import NavItems from '../Header/NavItems';
import NAV_ITEMS from '../common/Sitemap';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  h2 {
    padding: 0 20px;
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
  /*justify-content: center;*/
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
`;

const VideoContainer = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(220,220,200,.7);
    z-index: 1001;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;

const Image = styled.div`
  height: 400px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 1009px) {
    height: 300px;
  }
  @media (max-width: 679px) {
    height: 200px;
  }
`;

const Content = ({main, sub}) => {
  const currentMain = NAV_ITEMS.find(item => item.key === main) || {};
  const current = currentMain.submenu && currentMain.submenu.length ? currentMain.submenu.find(item => sub === item.key) : {};
  const renderContent = () => current.component || currentMain.component || <>no comp</>
  const subtitle = current.value || currentMain.value || '';

  return (
    <Container>
      {currentMain.video && <VideoContainer><Video autoPlay loop muted><source poster={currentMain.image} src={currentMain.video} type="video/mp4" /></Video></VideoContainer>}
      {(current.image && <Image bg={current.image} />) || (currentMain.image && <Image bg={currentMain.image} />)}
      <h2>{subtitle}</h2>
      <ContentContainer>
        {currentMain.submenu && (<LeftNav><NavItems main={main} active={sub} /></LeftNav>)}
        {renderContent()}
      </ContentContainer>
    </Container>
  );
};

export default Content;
