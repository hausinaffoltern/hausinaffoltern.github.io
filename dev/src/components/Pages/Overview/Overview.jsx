import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
`;

const Overview = () => {
  return (
    <Container>
      <h3>Beschreibung</h3>
    </Container>
  )
};

export default Overview;
