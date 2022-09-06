import React, { useContext } from 'react';
import home from '../../assets/home.jpg'
import share from '../../assets/share.jpg'
// import homevideo from '../../assets/homevideo.mp4'
import styled from 'styled-components';
import { HiOutlineCalendar } from "react-icons/hi";
import { MdOutlinePlace } from "react-icons/md";
import { BsPiggyBank, BsHouse, BsDoorClosed } from "react-icons/bs";
import { FiFlag } from "react-icons/fi";
import Floor from "../../assets/floorplan.svg";
import Excavator from "../../assets/excavator.svg";
import Land from "../../assets/land.svg";
import translations from "../common/translations";
import { LanguageContext } from '../../hooks/useStore';

const Content = styled.main`
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  h2 {
    padding: 0 20px;
  }
  p {
    padding: 0 20px;
  }
  @media print {
    box-shadow: none;
    p {
      padding: 0;
    }
  }
`;

const MainArticle = styled.article`
  background: #eee;  
  padding: 5px;
  p {
    line-height: 1.6em;
    margin: 10px;
    padding: 0 10px;
    @media print {
        padding: 0;
    }
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
  img {
    display: none;
  }
  @media print {
    height: auto;
    img {
      width: 100%;
      display: block;
    } 
  }
`;

const CustomIcon = styled.div`
  width: 44px;
  height: 44px;
  background-color: #676;
  background-repeat: no-repeat;
  img {
    display: none;
  }
  @media print {
    img {
      display: block;
    }
  }
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
  @media print {
    justify-content: space-between;
  }
`;

const Fact = styled.article`
  display: flex;
  justify-content: left;
  width: 300px;
  min-height: 105px;
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
    color: #676;
  }
  @media print {
    padding: 14px 0;
    height: 85px;
  }
  @media (max-width: 679px) {
    min-height: 40px;
  }
`;

const PFact = styled(Fact)`
  @media print {
    display: none;
  }
`

const H2 = styled.h2`
  @media print {
    text-align: center;
    font-size: 30px;
    padding: 0 !important;
    margin: 20px 0 0;
  }
`;

const FactImage = styled.div`
  width: 104px;
  height: 44px;
  svg {
    width: 100%;
    height: 100%;
    color: #676;
  }
  background-image: url(${props => props.type});
  background-size: content;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  @media print {
    width: 84px;
  }
`

const Home = () => {

  const { language } = useContext(LanguageContext);
  if(!language) {
    return <></>;
  }

  return (
    <>
      <Content>
        <Image><img alt="Reihenfamilienhaus am famielienfreundlichen und ruhigen Erlenweg" src={share} /></Image>
        <H2>{translations('h2', language)}</H2>
        <MainArticle itemscope itemtype="https://schema.org/Offer">
        <p>{translations('header', language)}</p>
        </MainArticle>
        <Facts>
          <Fact>
            <FactImage>
              <MdOutlinePlace />
            </FactImage>
            <div>
            <h3>{translations('address', language)}</h3>
            <p>{translations('addressv', language)}</p>
            </div>
          </Fact>
          <PFact>
            <FactImage>
              <BsHouse />
            </FactImage>
            <div>
            <h3>{translations('object', language)}</h3>
            <p>{translations('objectv', language)}</p>
            </div>
          </PFact>
          <Fact>
            <FactImage>
              <BsPiggyBank />
            </FactImage>
            <div>
            <h3>{translations('price', language)}</h3>
            <p>{translations('pricev', language)}</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <HiOutlineCalendar />
            </FactImage>
            <div>
            <h3>{translations('available', language)}</h3>
            <p>November 2022</p>
            </div>
          </Fact>

          <Fact>
          <FactImage>
              <FloorPlan>
                <img src={Floor} alt="floor" />
              </FloorPlan>
            </FactImage>
            <div>
            <h3>{translations('space', language)}</h3>
            <p>168 m²</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <BsDoorClosed />
            </FactImage>
            <div>
            <h3>{translations('rooms', language)}</h3>
            <p>6.5</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <FiFlag />
            </FactImage>
            <div>
            <h3>{translations('year', language)}</h3>
            <p>1979</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <Renovation>
                <img src={Excavator} alt="renovation" />
              </Renovation>
            </FactImage>
            <div>
            <h3>{translations('renovation', language)}</h3>
            <p>2021</p>
            </div>
          </Fact>
          <Fact>
          <FactImage>
              <Fence>
                <img src={Land} alt="land" />
              </Fence>
            </FactImage>
            <div>
            <h3>{translations('land', language)}</h3>
            <p>205 m²</p>
            </div>
          </Fact>
        </Facts>
      </Content>
    </>
  );
};

export default Home;
