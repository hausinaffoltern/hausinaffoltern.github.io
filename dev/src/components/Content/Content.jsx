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
`;

const LeftNav = styled.ul`
  width: 200px;
  margin: 0 10px;
  padding: 0;
  & li {
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

const VideoContainer = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
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
  width: 100%;
  background-image: url(${props => props.bg});
  background-size: content;
  background-position: 0 70%;
  background-repeat: no-repeat;
  z-index: 1000;
`;

const Image = styled.div`
  height: 400px;
  background-image: url(${props => props.bg});
  background-size: content;
  background-position: 0 70%;
  background-repeat: no-repeat;
`;

const Content = ({main, sub}) => {

  const currentMain = NAV_ITEMS.find(item => item.key === main) || {};
  const current = currentMain.submenu && currentMain.submenu.length ? currentMain.submenu.find(item => sub === item.key) : {};
  const renderContent = () => current.component || currentMain.component || <>no comp</>
  const subtitle = current.value ? ` - ${current.value}` : '';

  return (
    <Container>
      {currentMain.video && <VideoContainer><Video autoPlay loop muted poster="images/poster.jpg"><source width="100%" src={currentMain.video} type="video/mp4" /></Video></VideoContainer>}
      {currentMain.image && <Image bg={currentMain.image} />}
      <h2>{currentMain.value} {subtitle}</h2>
      <ContentContainer>
        {subtitle && (
        <LeftNav>
          <NavItems main={main} active={sub} />
        </LeftNav>
        )}
        {renderContent()}
      </ContentContainer>
    </Container>
  );
};

export default Content;
