import React from 'react';
import styled from 'styled-components';

const Spot = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 0 0 0 0;
  border-radius: 15px;
  background: white;
  top: ${props => props.t};
  left: ${props => props.l};
  transform: translateX(-50%) translateY(-50%);
  &:before {
    content: ' ';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 45px;
    background-color: #464;
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }
  
  &:after {
    content: ' ';
    position: absolute;
    left: 0; 
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite;
  }
  @keyframes pulse-ring {
    0% {
      transform: scale(.33);
    }
    80%, 100% {
      opacity: 0;
    }
  }
  
  @keyframes pulse-dot {
    0% {
      transform: scale(.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(.8);
    }
  }
`;


const Links = ({ level, onClick }) => {

  const hotspots = {
    eg: [
      {
        t: '25%',
        l: '11%',
        nr: 1, //entry
      },
      {
        t: '67%',
        l: '22%',
        nr: 2, //kitchen
      },
      {
        t: '50%',
        l: '50%',
        nr: 3, //eg
      },
      {
        t: '25%',
        l: '77%',
        nr: 4, //wz1
      },
      {
        t: '67%',
        l: '77%',
        nr: 5, //wz2
      },
      {
        t: '7%',
        l: '42%',
        nr: 6, //wz2
      }
    ],
    og:[
      {
        t: '25%',
        l: '19%',
        nr: 1, //buro
      },
      {
        t: '67%',
        l: '19%',
        nr: 2, //dori
      },
      {
        t: '55%',
        l: '55%',
        nr: 3, //stairs
      },
      {
        t: '27%',
        l: '55%',
        nr: 4, //bath
      },
      {
        t: '50%',
        l: '85%',
        nr: 5, //wz2
      }
    ],
    dg:[
      {
        t: '22%',
        l: '20%',
        nr: 1, //bath
      },
      {
        t: '57%',
        l: '31%',
        nr: 2, //bed
      },
      {
        t: '47%',
        l: '55%',
        nr: 3, //stairs
      },
      {
        t: '47%',
        l: '75%',
        nr: 4, //wz
      }
    ],
    ug:[],
  }

  return (
    <>
      {hotspots[level].map(({t,l,nr}) => {
        return <Spot key={`${level}${nr}`}onClick={() => onClick(nr)} t={t} l={l} />
      }) }
    </>
  );
};

export default Links;

