import React, { useState } from 'react';
import Plan from './Plan';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';
import { getSource, getSrc } from '../../common/vr';

const Content = styled.div`
  padding: 10px;
`;

const Dg = () => {
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
    getSource(getSrc('dg_bad')),
    getSource(getSrc('dg_schlafzimmer')),
    getSource(getSrc('dg')),
    getSource(getSrc('dg_wohnzimmer')),
  ]

  return (
    <Content>
      <h3>Virtuelle Besichtigung</h3>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />

      <Plan level="dg" openLightboxOnSlide={openLightboxOnSlide} />
      <h3>Ipsum</h3>
      <p>Lorem</p>
    </Content>
  );
};

export default Dg;