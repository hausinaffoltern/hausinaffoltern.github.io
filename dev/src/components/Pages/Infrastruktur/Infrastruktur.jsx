import React, {useContext} from 'react';
import schule from '../../../assets/umgebung/schule.jpg'
import einkauf from '../../../assets/umgebung/einkauf.jpg'
import ov from '../../../assets/umgebung/ov.jpg'
import styled from 'styled-components';
import { MdOutlineDirectionsBike } from "react-icons/md";
import { BiWalk, BiBus } from "react-icons/bi"; 
import { FaCarAlt } from "react-icons/fa"; 
import translations from "../../common/translations";
import { LanguageContext } from '../../../hooks/useStore';

const MapContainer = styled.div`
  width: 100%;
  padding: 0 0 20px;
  img {
    width: 100%;
    border: none;
  }
`;

const Image = styled.img`
`;

const PrintFlex = styled.div`
  @media print {
    display: flex;
    div, dl {
      width: 50%;
      br {
        display: inline;
      }
      span {
        margin-left: 0px;
      }
      img {
        width: 95%;
        margin-top: 40px;
        height: 230px;
        object-fit: cover;
      }
      img#ov {
        height: 210px;
      }
    }
  }
`;

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
  h3 {
    margin-top: 35px;
  }
`;

const Dl = styled.dl`
  display: flex;
  flex-wrap: wrap;
  @media print {
    margin-top: 5px;
    padding-bottom: 50px;
  }
`;


const Dt = styled.dt`
  font-weight: bold;
  border-bottom: 1px solid #9a9;
  flex-basis: calc(50% - 20px);  
  padding: 10px;
  span {
    font-weight: normal;
  }
  @media print {
    padding: 8px 10px;
    br {
      display: none;
    }
    span {
      margin-left: 20px;
    }
  }
`;

const Dtt = styled(Dt)`
  color: #676;
`;

const Dt1 = styled(Dt)`
  @media print {
    border-bottom: none;
  }
`;

const Dd = styled.dd`
  text-align: center;
  border-bottom: 1px solid #9a9;
  flex-basis: calc(25% - 20px);  
  margin: 0;
  color: #676;
  padding: 10px;
  @media print {
    padding: 8px 10px;
  }
`;

const Dd1 = styled(Dd)`
  @media print {
    border-bottom: none;
  }
`;

const Ddt = styled(Dd)`
  color: #676;
  font-size:24px;
  padding: 0 10px;
  @media print {
    font-size:21px;
  }

`;

const Infrastruktur = () => {
  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }

  const t = v => translations(v,language);
  return (<Container>
    <h3>{t('school')}</h3>
    <MapContainer>
      <Image src={schule} />
    </MapContainer>
    <Dl>
      <Dtt></Dtt>   <Ddt><BiWalk /></Ddt> <Ddt><MdOutlineDirectionsBike /></Ddt>
      <Dt>{t('primary')} Stigeli<br /><span>180m</span></Dt>   <Dd>2 min</Dd> <Dd>1 min</Dd>
      <Dt>{t('nursery')} Semper<br /><span>220m</span></Dt>   <Dd>2 min</Dd> <Dd>1 min</Dd>
      <Dt>{t('primary')} Butzen<br /><span>260m</span></Dt>   <Dd>4 min</Dd> <Dd>1.5 min</Dd>
      <Dt>{t('nursery')} Spittel<br /><span>300m</span></Dt>   <Dd>3 min</Dd> <Dd>1 min</Dd>
      <Dt1>{t('secondary')}<br /><span>1200m</span></Dt1>   <Dd1>13 min</Dd1><Dd1>4 min</Dd1>
    </Dl>
    <h3>{t('shopping')}</h3>
    <PrintFlex>
      <MapContainer>
        <Image src={einkauf} />
      </MapContainer>
      <Dl>
        <Dtt></Dtt>   <Ddt><FaCarAlt /></Ddt> <Ddt><MdOutlineDirectionsBike /></Ddt>
        <Dt>Lidl / Migros<br /><span>500m</span></Dt>   <Dd>2 min</Dd> <Dd>7 min</Dd>
        <Dt>Denner<br /><span>500m</span></Dt>   <Dd>2 min</Dd> <Dd>7 min</Dd>
        <Dt>Coop Supermarkt<br /><span>1200m</span></Dt>   <Dd>3 min</Dd> <Dd>16min</Dd>
        <Dt>Conforama<br /><span>1200m</span></Dt>   <Dd>3 min</Dd> <Dd>16 min</Dd>
        <Dt>Manor / Jumbo<br /><span>1600m</span></Dt>   <Dd>5 min</Dd><Dd>21 min</Dd>
        <Dt>Hornbach<br /><span>1900m</span></Dt>   <Dd>6 min</Dd><Dd>24 min</Dd>
        <Dt>Obi / Pfister<br /><span>1800m</span></Dt>   <Dd>6 min</Dd><Dd>22 min</Dd>
      </Dl>
    </PrintFlex>
    <h3>{t('transport')}</h3>
    <PrintFlex>
      <MapContainer>
        <Image id="ov" src={ov} />
      </MapContainer>
      <Dl>
        <Dtt></Dtt>   <Ddt><BiBus /> / <FaCarAlt /></Ddt> <Ddt><BiWalk /></Ddt>
        <Dt>Bus 200<br /><span>350m</span></Dt>   <Dd></Dd> <Dd>4 min</Dd>
        <Dt>Bus 225<br /><span>100m</span></Dt>   <Dd></Dd> <Dd>1 min</Dd>
        <Dt>{t('train')} S14 / S5<br /><span>1200m</span></Dt>   <Dd>7 min</Dd> <Dd>15min</Dd>
        <Dt>{t('motorway')}<br /><span>2000m</span></Dt>   <Dd>5 min</Dd> <Dd></Dd>
      </Dl>
    </PrintFlex>
    </Container>
  );
};

export default Infrastruktur;

