import React from 'react';
import lage from '../../../assets/umgebung/lage.jpg'
import home from '../../../assets/home.jpg'
import video from '../../../assets/lage.mp4'
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  padding: 0 0 20px;
  img {
    width: 100%;
    border: none;
  }
`;
const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
`;

const Video = styled.video`
  width: 100%;
  z-index: 1000;
`;

const Image = styled.div`
  height: 400px;
  background-image: url(${lage});
  background-size: 150%;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 1009px) {
    height: 300px;
    background-size: 200%;
    background-position: center 40%;
  }
  @media (max-width: 679px) {
    background-size: 260%;
    background-position: center 42%;
    height: 200px;
  }
`;

const Lage = () => {
  return (<Container>
    <MapContainer>
      <Image />
    </MapContainer>
    <h3>Präsentationsvideo</h3>
    <Video controls controlsList="nodownload"><source poster={home} src={video} type="video/mp4" /></Video>
    </Container>
  );
};

export default Lage;

