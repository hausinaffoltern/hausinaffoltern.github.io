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

const Content = styled.main`
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  h2 {
    padding: 0 20px;
  }
  p {
    padding: 0 20px;
  }
`;

const MainArticle = styled.article`
  background: #eee;  
  padding: 5px;
  p {
    line-height: 1.6em;
    margin: 10px;
    padding: 0 10px;
  }
`;

const Image = styled.div`
  height: 400px;
  background-image: url(${home});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 1009px) {
    height: 300px;
  }
  @media (max-width: 679px) {
    height: 200px;
    background-size: 200%;
  }
`;

const CustomIcon = styled.div`
  width: 44px;
  height: 44px;
  background-color: #9a9;
  background-repeat: no-repeat;
`;

const FloorPlan = styled(CustomIcon)`
  -webkit-mask-image: url(${Floor});
  mask-image: url(${Floor});
`;

const Renovation = styled(CustomIcon)`
  -webkit-mask-image: url(${Excavator});
  mask-image: url(${Excavator});
`;

const Fence = styled(CustomIcon)`
  -webkit-mask-image: url(${Land});
  mask-image: url(${Land});
`;

const Facts = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
`;

const Fact = styled.article`
  display: flex;
  justify-content: left;
  width: 300px;
  padding: 30px 0;
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
    color: #464;
  }
`;

const FactImage = styled.div`
  width: 104px;
  height: 44px;
  svg {
    width: 100%;
    height: 100%;
    color: #9a9;
  }
  background-image: url(${props => props.type});
  background-size: content;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`

const Home = () => {

  return (
    <>
      <Content>
        {/*<VideoContainer><Video autoPlay loop muted><source poster={home} src={homevideo} type="video/mp4" /></Video></VideoContainer>*/}
        <Image />
        <h2>Reihenfamilienhaus am famielienfreundlichen und ruhigen Erlenweg</h2>
        <MainArticle itemscope itemtype="https://schema.org/Offer">
        <p>In Affoltern am Albis verkaufen wir an ruhiger Quartierlage ein fein saniertes Reihenmittelhaus mit sehr grosszügigen Platzverhältnissen. 220 m² Gesamtnutzfläche verteilt auf 6.5 Zimmer, Nebenräume, Balkonen, Gartensitzplatz und 4 Geschosse</p>
        </MainArticle>
        <Facts>
          <Fact>
            <FactImage>
              <MdOutlinePlace />
            </FactImage>
            <div>
            <h3>Addresse</h3>
            <p>Erlenweg 4, 8910<br />Affoltern am Albis,<br />Schweiz</p>
            </div>
          </Fact>
          <Fact>
            <FactImage>
              <BsHouse />
            </FactImage>
            <div>
            <h3>Objektart</h3>
            <p>Reihenfamilienhaus</p>
            </div>
          </Fact>
          <Fact>
            <FactImage>
              <BsPiggyBank />
            </FactImage>
            <div>
            <h3>Verkaufspreis</h3>
            <p>CHF 1'450'000.-</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <HiOutlineCalendar />
            </FactImage>
            <div>
            <h3>Verfügbar ab</h3>
            <p>November 2022</p>
            </div>
          </Fact>

          <Fact>
          <FactImage>
              <FloorPlan />
            </FactImage>
            <div>
            <h3>Nettowohnflache</h3>
            <p>168 m²</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <BsDoorClosed />
            </FactImage>
            <div>
            <h3>Zimmer</h3>
            <p>6.5</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <FiFlag />
            </FactImage>
            <div>
            <h3>Baujahr</h3>
            <p>1979</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <Renovation />
            </FactImage>
            <div>
            <h3>Letzte renovation</h3>
            <p>2021</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <Fence />
            </FactImage>
            <div>
            <h3>Grundstückflache</h3>
            <p>205 m²</p>
            </div>
          </Fact>
        </Facts>
      </Content>
    </>
  );
};

export default Home;
