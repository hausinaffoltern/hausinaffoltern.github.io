import React from 'react';
import bg from '../../assets/bg.jpg'
import styled from 'styled-components';

const Content = styled.div`
  background: #fff;
  h2 {
    padding: 0 20px;
  }
  p {
    padding: 0 20px;
  }
`;


const Image = styled.div`
  height: 400px;
  background-image: url(${bg});
  background-size: content;
  background-position: 0 70%;
  background-repeat: no-repeat;
`;

const Kontakt = () => {
  return (
    <Content>
      <Image />
      <h2>Kontakt</h2>
    </Content>
  );
};

export default Kontakt;
