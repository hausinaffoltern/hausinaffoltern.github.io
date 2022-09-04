import React, { useState, useEffect } from 'react';
import Links from './Links';
import eg from '../../../assets/rooms/eg.jpg';
import ug from '../../../assets/rooms/ug.jpg';
import dg from '../../../assets/rooms/dg.jpg';
import og from '../../../assets/rooms/og.jpg';
import styled from 'styled-components';

const Floor = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;

const LinksContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Plan = ({level, openLightboxOnSlide}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleResize() {
      setVisible(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  useEffect(() => {
    function handleOrientationhange() {
      setVisible(false)
    }
    window.addEventListener('orientationchange', handleOrientationhange)
    return () => {
      window.removeEventListener('orientationchange', handleOrientationhange);
    };
  })

  useEffect(() => {
    setVisible(true);
  },[visible])

  if(!visible) {
    return <></>
  };

  const floorPlans = { eg, dg, og, ug };

  return (
    <>

      <Floor>
        <img alt={`Geschoss-${level}`}src={floorPlans[level]} />
        <LinksContainer><Links onClick={openLightboxOnSlide} level={level} /></LinksContainer>
      </Floor>
    </>
  );
};

export default Plan;

