import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  padding: 0 0 20px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
`;

const Infrastruktur = () => {
  return (<Container>
    <p>Schule und Kindergarten</p>
    <MapContainer>
      <iframe title="schule" src="https://www.google.com/maps/d/embed?mid=1ETWwk7OkO4KEp1PKEWFSg7SuOy5woaU&hl=de&ehbc=2E312F" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </MapContainer>
    <p>Einkaufsmöglichkeiten</p>
    <MapContainer>
      <iframe title="einkauf" src="https://www.google.com/maps/d/embed?mid=1ETWwk7OkO4KEp1PKEWFSg7SuOy5woaU&hl=de&ehbc=2E312F" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </MapContainer>
    <p>Öffentliche Verkher</p>
    <MapContainer>
      <iframe title="verkher" src="https://www.google.com/maps/d/embed?mid=1ETWwk7OkO4KEp1PKEWFSg7SuOy5woaU&hl=de&ehbc=2E312F" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </MapContainer>
    </Container>
  );
};

export default Infrastruktur;

