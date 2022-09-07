import React, { useState } from 'react';
import Plan from './Plan';
import FsLightbox from 'fslightbox-react';
import { getSource, getSrc } from '../../common/vr';

const Eg = () => {
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
    getSource(getSrc('eg_vorplatz')),
    getSource(getSrc('eg_kuche')),
    getSource(getSrc('eg')),
    getSource(getSrc('eg_wohnzimmer1')),
    getSource(getSrc('eg_wohnzimmer2')),
    getSource(getSrc('eg_wc'))
  ];

  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        slide={lightboxController.slide}
      />
      <Plan level="eg" openLightboxOnSlide={openLightboxOnSlide} />
    </>
  );
};

export default Eg;

