import gemeinde from '../../../assets/umgebung/gemeinde.jpg'
import React, {useContext} from 'react';
import styled from 'styled-components';
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
const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
`;

const Image = styled.div`
  height: 500px;
  background-image: url(${gemeinde});
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 1009px) {
    height: 300px;
    background-size: 200%;
    background-position: center 40%;
  }
  @media (max-width: 679px) {
    background-size: 210%;
    background-position: center 22%;
    height: 200px;
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

const Printp = styled.p`
  @media print {
    display: none;
  }
`;

const Gemeinde = () => {
  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }

  const t = v => translations(v,language);
  return (
    <Container>
      {t('gemeinde')}
      <Printp>{t('morefacts')}</Printp>
      <MapContainer>
      <Image><img alt="Affoltern am Albis" src={gemeinde} /></Image>
      </MapContainer>
    </Container>
  );
};

export default Gemeinde;

