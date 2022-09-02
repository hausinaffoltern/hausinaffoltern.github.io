import React from 'react';
import NavItems from '../Header/NavItems';
import NAV_ITEMS from '../common/Sitemap';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
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
