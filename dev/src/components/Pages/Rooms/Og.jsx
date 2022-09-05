import React, { useState } from 'react';
import Plan from './Plan';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';
import { getSource, getSrc } from '../../common/vr';

const Content = styled.div`
  padding: 10px;
  h3 {
    @media print {
      display: none;
    }
  }
`;

const Og = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
    toggler: !lightboxController.toggler,
    slide: number
    });
  }

  const sources = [
    getSource(getSrc('og_buro')),
    getSource(getSrc('og_schlafzimmer1')),
    getSource(getSrc('og')),
    getSource(getSrc('og_bad')),
    getSource(getSrc('og_schlafzimmer2')),
  ]
  
  return (
    <Content>
      <h3>Virtuelle Besichtigung</h3>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />

      <Plan level="og" openLightboxOnSlide={openLightboxOnSlide} />
    </Content>
  );
};

export default Og;