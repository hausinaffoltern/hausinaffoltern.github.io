import React, { useState } from 'react';
import Plan from './Plan';
import FsLightbox from 'fslightbox-react';

const Ug = () => {

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

  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[]}
        slide={lightboxController.slide}
      />

      <Plan level="ug" openLightboxOnSlide={openLightboxOnSlide} />
    </>
  );
};

export default Ug;

