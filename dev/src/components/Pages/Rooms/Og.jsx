import React, { useState } from 'react';
import Plan from './Plan';
import FsLightbox from 'fslightbox-react';
import { getSource, getSrc } from '../../common/vr';

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
    <>
      
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />

      <Plan level="og" openLightboxOnSlide={openLightboxOnSlide} />
    </>
  );
};

export default Og;