import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
  display: flex;
  @media (max-width: 1009px) {
    flex-direction: column; 
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
`;

const Dd = styled.dd`
  border-bottom: 1px solid #9a9;
  flex-basis: calc(50% - 20px);  
  margin: 0;
  color: #686;
  padding: 10px;
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
      top: 50%;
      margin-top: -5px;
      left: 0;
    }
  }
}
`;

const Facts = () => {
  return (
    <Container>
      <Content>
        <h3>Eckdaten</h3>
        <Dl>
          <Dt>Verfügbar ab</Dt>   <Dd>November 2022</Dd>
          <Dt>Zimmer</Dt>   <Dd>6.5</Dd>
          <Dt>Badezimmer</Dt>   <Dd>3</Dd>
          <Dt>Baujahr</Dt>   <Dd>1979</Dd>
          <Dt>Letzte Renovation</Dt>   <Dd>2020</Dd>
          <Dt>Wärmeerzeugung</Dt>   <Dd>Ölheizung</Dd>
          <Dt>Wärmeverteilung</Dt>   <Dd>Heizkörper</Dd>
        </Dl>
        <h3>Angebot</h3>
        <Dl>
          <Dt>Verkaufspreis</Dt>   <Dd>CHF 1'450'000.-</Dd>
        </Dl>
      </Content>
      <Content>
        <h3>Flachen</h3>
        <Dl>
          <Dt>Nettowohnfläche</Dt>   <Dd>150m²</Dd>
          <Dt>Grundstücksfläche</Dt>   <Dd>205m²</Dd>
          <Dt>Gesamtnutzfläche</Dt>   <Dd>230m²</Dd>
          <Dt>Gebäudevolumen</Dt>   <Dd>678m³</Dd>
        </Dl>
        <h3>Eigenschaften</h3>
        <Container>
          <Content>
            <Ul>
              <li>Freibad</li>
              <li>Haustiere erlaubt</li>
              <li>Kinderfreundlich</li>
              <li>Komplett saniert</li>
              <li>Privatweg</li>
            </Ul>
          </Content>
          <Content>
            <Ul>
              <li>Ruhig</li>
              <li>Schule</li>
              <li>Sonnig</li>
              <li>Sportanlagen</li>
              <li>Verkehrsverbindung</li>
            </Ul>
          </Content>
        </Container>
      </Content>
    </Container>
  )
};

export default Facts;
