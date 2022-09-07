import React, { useState } from 'react';
import Plan from './Plan';
import FsLightbox from 'fslightbox-react';
import { getSource, getSrc } from '../../common/vr';

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
    <>
      
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />
      <Plan level="dg" openLightboxOnSlide={openLightboxOnSlide} />
    </>
  );
};

export default Dg;