import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
  @media print {
    h3 {
      padding: 10px 0;
      margin 0;
    }
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
      top: 50%;
      margin-top: -5px;
      left: 0;
    }
    @media print {
      line-height: 24px;
      padding-left: 0;
      &::before {
        display: none;
      }
    }
  }
  @media print {
    margin-left: 20px;
    padding: 0;
    list-style-type: square;
  }
}
`;

const Renovation = () => {
  return (
    <Container>
      <h3>2016</h3>
      <Ul>
      <li>Umbau Eingang und Küche</li>
      <li>Badezimmersanierung OG</li>
      <li>Neues Badezimmer DG</li>
      <li>Neues Dachfenster + Aussenrolladen mit Solarbetrieb und Fernbedienung Badezimmer DG</li>
      <li>Boden ersetzen EG und DG</li>
      <li>Komplettes Streichen</li>
      </Ul>
      <h3>2017</h3>
      <Ul>
      <li>Fenster ersetzen EG</li>
      <li>Lamellenstoren mit Fernbedienung EG ung DG</li>
      <li>Heizungsanierung</li>
      <li>Gartenumbau</li>
      </Ul>
      <h3>2018</h3>
      <Ul>
      <li>Terassenüberdachung EG</li>
      <li>Gartensitzplatz sanieren, Bambusdielen verlegen</li>
      <li>Aussenparkplatz renovieren</li>
      <li>Wasserhauptleitung ersetzen</li>
      </Ul>
      <h3>2019</h3>
      <Ul>
      <li>Wohnzimmer Wandverkleidung mit Naturstein und Licht</li>
      <li>Boden ersetzen OG</li>
      <li>Fenster ersetzen OG</li>
      <li>Lamellenstoren mit Fernbedienung OG</li>
      </Ul>
      <h3>2020</h3>
      <Ul>
      <li>Wasserverteiler im Keller</li>
      <li>Radiatoren ersetzen</li>
      <li>Gäste WC komplette Sanierung</li>
      <li>Trennwand mit Schiebetür DG</li>
      </Ul>
      <h3>2021</h3>
      <Ul>
      <li>Lukarnenverkleidung Fenster DG</li>
      <li>Dachfenster ersetzen + Aussenrolladen mit Solarbetrieb und Fernbedienung</li>
      <li>Treppen EG-OG ersetzen</li>
      </Ul>
    </Container>
  );
};

export default Renovation;
