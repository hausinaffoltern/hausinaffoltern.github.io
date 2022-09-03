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

const Lage = () => {
  return (<Container>
    <MapContainer>
      <iframe title="lage" src="https://www.google.com/maps/d/u/0/embed?mid=1ie07oENDuo85FUB7jUT0C3bPcwiHh9k&hl=de&ehbc=2E312F" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </MapContainer>
    <MapContainer>
      <iframe title="alge2" src="https://www.google.com/maps/d/embed?mid=1ETWwk7OkO4KEp1PKEWFSg7SuOy5woaU&hl=de&ehbc=2E312F" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </MapContainer>
    </Container>
  );
};

export default Lage;

