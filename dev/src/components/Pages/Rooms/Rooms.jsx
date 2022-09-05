import React from 'react';
import Eg from './Eg';
import Og from './Og';
import Dg from './Dg';
import Ug from './Ug';
import styled from 'styled-components';

const Container = styled.article`
    flex-direction: column;
`

const Rooms = () => {
  return (
    <Container>
      <Eg />
      <Og />
      <Dg />
      <Ug />
    </Container>
  );
};

export default Rooms;

