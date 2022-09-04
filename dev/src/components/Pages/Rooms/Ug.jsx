import React from 'react';
import Plan from './Plan';
import styled from 'styled-components';


const Content = styled.div`
  padding: 10px;
`;

const Ug = () => {
  return (
    <Content>
      <Plan level="ug" />
      <h3>Ipsum</h3>
      <p>Lorem</p>
    </Content>
  );
};

export default Ug;

