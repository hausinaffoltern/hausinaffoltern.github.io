import React, { useState } from 'react';
import Plan from './Plan';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';

const Content = styled.div`
  padding: 10px;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 30px;
  bottom: 30px;
  left: 30px;
  right: 30px; 
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

  return (
    <Content>
      <h3>Virtual sicht</h3>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          <Iframe src="https://momento360.com/e/u/5a12677d318042408ea58c30a126a506?utm_campaign=embed&utm_source=other&heading=178.27&pitch=-19.72&field-of-view=75&size=medium" width="80%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowFullScreen />,
          <Iframe src="https://momento360.com/e/u/5a12677d318042408ea58c30a126a506?utm_campaign=embed&utm_source=other&heading=178.27&pitch=-19.72&field-of-view=75&size=medium" width="80%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowFullScreen />,
          <Iframe src="https://momento360.com/e/u/5a12677d318042408ea58c30a126a506?utm_campaign=embed&utm_source=other&heading=178.27&pitch=-19.72&field-of-view=75&size=medium" width="80%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowFullScreen />,
          <Iframe src="https://momento360.com/e/u/5a12677d318042408ea58c30a126a506?utm_campaign=embed&utm_source=other&heading=178.27&pitch=-19.72&field-of-view=75&size=medium" width="80%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowFullScreen />
        ]}
        slide={lightboxController.slide}
      />

      <Plan level="dg" openLightboxOnSlide={openLightboxOnSlide} />
      <h3>Ipsum</h3>
      <p>Lorem</p>
    </Content>
  );
};

export default Dg;

