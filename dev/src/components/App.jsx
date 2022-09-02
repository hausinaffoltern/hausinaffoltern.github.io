import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import React, { PureComponent } from 'react';

/* components */
import Header from './Header';
import Home from './Home';
import Content from './Content';
import ErrorRenderer from './ErrorBoundary/ErrorRenderer';
import styled from 'styled-components';
import NAV_ITEMS from './common/Sitemap';
import Footer from "./Footer";

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
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {this.addRoutes()}
              <Route path="error" element={<ErrorRenderer />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </InnerContainer>
      </MainContainer>
    );
  }
}

export default App;
