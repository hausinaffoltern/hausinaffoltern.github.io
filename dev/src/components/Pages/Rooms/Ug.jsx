import React, { useState } from 'react';
import Plan from './Plan';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';


const Content = styled.div`
  padding: 10px;
  h3 {
    @media print {
      display: none;
    }
  }
`;

/*const Iframe = styled.iframe`
  position: absolute;
  top: 30px;
  bottom: 30px;
  left: 30px;
  right: 30px; 
`;*/


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
    <Content>
      
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[]}
        slide={lightboxController.slide}
      />

      <Plan level="ug" openLightboxOnSlide={openLightboxOnSlide} />
    </Content>
  );
};

export default Ug;

