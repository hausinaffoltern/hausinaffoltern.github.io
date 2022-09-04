import React from 'react';
import schule from '../../../assets/umgebung/schule.jpg'
import einkauf from '../../../assets/umgebung/einkauf.jpg'
import ov from '../../../assets/umgebung/ov.jpg'
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  padding: 0 0 20px;
  img {
    width: 100%;
    border: none;
  }
`;

const Image = styled.img`
`;

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
`;

const Infrastruktur = () => {
  return (<Container>
    <p>Schule und Kindergarten</p>
    <MapContainer>
      <Image src={schule} />
    </MapContainer>
    <p>Einkaufsmöglichkeiten</p>
    <MapContainer>
      <Image src={einkauf} />
    </MapContainer>
    <p>Öffentliche Verkher</p>
    <MapContainer>
      <Image src={ov} />
    </MapContainer>
    </Container>
  );
};

export default Infrastruktur;

