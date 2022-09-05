import {
  HashRouter, Routes, Route
} from "react-router-dom";
import React, { PureComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import NAV_ITEMS from './common/Sitemap';
/* components */
import Home from './Home';
import Header from './Header';
import Content from './Content';
import Footer from "./Footer";
import ErrorRenderer from './ErrorBoundary/ErrorRenderer';

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
  background: #f5f5f5;
  height: 100%;
`;

const InnerContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ReportStyle = createGlobalStyle`
  @page {
    size: A4;
    margin: 34pt 34pt 34pt 34pt;
    @bottom-right {
      content: counter(page) " / " counter(pages);
    }
  }
`;

class App extends PureComponent {


  addRoutes = () => {
    return NAV_ITEMS.map(main => {
      return main.submenu ? 
        main.submenu.map(sub => {
          return <Route key={`${main.key}/${sub.key}`} path={`${main.key}/${sub.key}`} element={<Content main={main.key} sub={sub.key}/>} />
        })
      : <Route key={main.key} path={main.key} element={<Content main={main.key} />} />
    })
  }

  render() {
    return (
      <MainContainer>
        <InnerContainer>
          <HashRouter>
            <ReportStyle />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {this.addRoutes()}
              <Route path="error" element={<ErrorRenderer />} />
            </Routes>
            <Footer />
          </HashRouter>
        </InnerContainer>
      </MainContainer>
    );
  }
}

export default App;
