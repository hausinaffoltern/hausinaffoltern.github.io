import React from 'react';
import home from '../../assets/home.jpg'
// import homevideo from '../../assets/homevideo.mp4'
import styled from 'styled-components';
import { HiOutlineCalendar } from "react-icons/hi";
import { MdOutlinePlace } from "react-icons/md";
import { BsPiggyBank, BsHouse, BsDoorClosed } from "react-icons/bs";
import { FiFlag } from "react-icons/fi";
import Floor from "../../assets/floorplan.svg";
import Excavator from "../../assets/excavator.svg";
import Land from "../../assets/land.svg";

const Content = styled.div`
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  h2 {
    padding: 0 20px;
  }
  p {
    padding: 0 20px;
  }
`;

const Image = styled.div`
  height: 400px;
  background-image: url(${home});
  background-size: 110%;
  background-position: center top;
  background-repeat: no-repeat;
  margin: 10px;
`;

const VideoContainer = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(200,200,200,.6);
    z-index: 1001;
  }
`;

const Video = styled.video`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;

const FloorPlan = styled.div`
  width: 44px;
  height: 44px;
  background-color: #9a9;
  -webkit-mask-image: url(${Floor});
  mask-image: url(${Floor});
`;

const Renovation = styled.div`
width: 44px;
height: 44px;
background-color: #9a9;
-webkit-mask-image: url(${Excavator});
mask-image: url(${Excavator});
`;

const Fence = styled.div`
width: 44px;
height: 44px;
background-color: #9a9;
-webkit-mask-image: url(${Land});
mask-image: url(${Land});
`;

const Facts = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const Fact = styled.div`
  flex-grow: 1;
  position: relative;
  width: calc(33.33% - 84px);
  padding: 0 0 60px 84px;
  h3 {
    margin: 0;
    padding: 5px 0;
    font-size: 16px;
    text-transform: uppercase;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
`

const FactImage = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  width: 44px;
  height: 44px;
  svg {
    width: 100%;
    height: 100%;
    color: #9a9;
  }
  background-image: url(${props => props.type});
  background-size: content;
  background-repeat: no-repeat;
`

const Home = () => {

  return (
    <>
      <Content>
        {/*<VideoContainer><Video autoPlay loop muted><source poster={home} src={homevideo} type="video/mp4" /></Video></VideoContainer>*/}
        <Image />
        <h2>Rheienmittelhaus in die glückliche Erlenweg - Affoltern a. A.</h2>
        <p>Lorem ipsum</p>
        <Facts>
          <Fact>
            <FactImage>
              <MdOutlinePlace />
            </FactImage>
            <h3>Addresse</h3>
            <p>Erlenweg 4, 8910<br />Affoltern am Albis, Schweiz</p>
          </Fact>
          <Fact>
            <FactImage>
              <BsHouse />
            </FactImage>
            <h3>Objektart</h3>
            <p>Mittelrheienfamilienhaus</p>
          </Fact>
          <Fact>
          <FactImage>
              <BsPiggyBank />
            </FactImage>
            <h3>Verkaufspreis</h3>
            <p>Preis auf Anfrage</p>
          </Fact>
          <Fact>
          <FactImage>
              <HiOutlineCalendar />
            </FactImage>
            <h3>Verfügbar ab</h3>
            <p>November 2022</p>
          </Fact>

          <Fact>
          <FactImage>
              <FloorPlan />
            </FactImage>
            <h3>Nettowohnflache</h3>
            <p>150m2 + 18m2 beheizte<br />hobbyraum im keller</p>
          </Fact>
          <Fact>
          <FactImage>
              <BsDoorClosed />
            </FactImage>
            <h3>Zimmer</h3>
            <p>6.5</p>
          </Fact>
          <Fact>
          <FactImage>
              <FiFlag />
            </FactImage>
            <h3>Baujahr</h3>
            <p>1979</p>
          </Fact>
          <Fact>
          <FactImage>
              <Renovation />
            </FactImage>
            <h3>Letzte renovation</h3>
            <p>2016</p>
          </Fact>
          <Fact>
          <FactImage>
              <Fence />
            </FactImage>
            <h3>Grundstückflache</h3>
            <p>205m<sup>2</sup></p>
          </Fact>
        </Facts>
      </Content>
    </>
  );
};

export default Home;
