import React from 'react';
import lage from '../../../assets/umgebung/lage.jpg'
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  padding: 0 0 20px;
  img {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
`;

const Lage = () => {
  return (<Container>
    <p></p>
    <MapContainer>
      <img src={lage} alt="Lage" />
    </MapContainer>
    </Container>
  );
};

export default Lage;

