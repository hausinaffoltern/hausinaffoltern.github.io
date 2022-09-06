import React, {useContext} from 'react';
import styled from 'styled-components';
import translations from "../../common/translations";
import { LanguageContext } from '../../../hooks/useStore';

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
  display: flex;
  @media (max-width: 1009px) {
    flex-direction: column; 
  }
  @media (max-width: 480px) {
    flex-direction: column; 
  }
`;

const EContainer = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
  display: flex;
  @media (max-width: 1009px) {
    flex-direction: column; 
  }
  @media print {
    flex-direction: row; 
    padding: 0 20px 0;
  }
`;

const Content = styled.article`
  flex-basis: 50%;  
  margin-right: 20px;
  @media (max-width: 1009px) {
    margin-right: 0;
  }
`;

const Dl = styled.dl`
  display: flex;
  flex-wrap: wrap;
`;

const Dt = styled.dt`
  font-weight: bold;
  border-bottom: 1px solid #9a9;
  flex-basis: calc(50% - 20px);  
  padding: 10px;
  @media print {
    padding: 8px 10px;
  }
`;

const Dd = styled.dd`
  border-bottom: 1px solid #9a9;
  flex-basis: calc(50% - 20px);  
  margin: 0;
  color: #676;
  padding: 10px;
  @media print {
    padding: 8px 10px;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    padding: 0 0 0 20px;
    line-height: 30px;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      background: #9a9;
      font-weight: bold;
      width: 10px;
      height: 10px;
      top: 11px;
      left: 0;
    }
  }
  @media print {
    list-style-type: square;
  }
}
`;

const Facts = () => {
  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }
  return (
    <Container>
      <Content>
        <h3>{translations('keydata', language)}</h3>
        <Dl>
          <Dt>Verfügbar ab</Dt>   <Dd>November 2022</Dd>
          <Dt>Zimmer</Dt>   <Dd>6.5</Dd>
          <Dt>Badezimmer</Dt>   <Dd>3</Dd>
          <Dt>Baujahr</Dt>   <Dd>1979</Dd>
          <Dt>Letzte Renovation</Dt>   <Dd>2021</Dd>
          <Dt>Wärmeerzeugung</Dt>   <Dd>Ölheizung</Dd>
          <Dt>Wärmeverteilung</Dt>   <Dd>Radiatoren</Dd>
        </Dl>
        <h3>Angebot</h3>
        <Dl>
          <Dt>Verkaufspreis</Dt>   <Dd>CHF 1'450'000.-</Dd>
        </Dl>
      </Content>
      <Content>
        <h3>Flachen</h3>
        <Dl>
          <Dt>Nettowohnfläche</Dt>   <Dd>168m²</Dd>
          <Dt>Grundstücksfläche</Dt>   <Dd>218m²</Dd>
          <Dt>Gesamtnutzfläche</Dt>   <Dd>220m²</Dd>
          <Dt>Gebäudevolumen</Dt>   <Dd>678m³</Dd>
        </Dl>
        <h3>Eigenschaften</h3>
        <EContainer>
          <Content>
            <Ul>
              <li>Komplett saniert</li>
              <li>Ruhig</li>
              <li>Schule und Kindergarten</li>
              <li>Kinderfreundlich</li>
              <li>Sonnig</li>
            </Ul>
          </Content>
          <Content>
            <Ul>
              <li>Privatweg</li>
              <li>Sportanlagen</li>
              <li>Haustiere erlaubt</li>
              <li>Verkehrsverbindung</li>
              <li>Freibad</li>
            </Ul>
          </Content>
        </EContainer>
      </Content>
    </Container>
  )
};

export default Facts;
