import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
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

const Renovation = () => {
  return (
    <Container>
    <h3>2022</h3>
    <Ul>
      <li>Treppenhaus streichen</li>
    </Ul>
    <h3>2021</h3>
    <Ul>
    <li>Lukarnenverkleidung Dachgeschoss Fenster</li>
    <li>Dachfenster ersetzen + Ausenrolladen mit Solarbetrieb und Fernbedienung</li>
    <li>Treppen EG-OG ersetzen</li>
    </Ul>
    <h3>2020</h3>
    <Ul>
    <li>Wasserverteiler in Keller</li>
    <li>Heizkörper</li>
    <li>Gast WC komplett Sanierung</li>
    <li>Dachgschoss Trennwand mit Schiebetür</li>
    </Ul>
    <h3>2019</h3>
    <Ul>
    <li>Wohnzimmerwandbelag und Licht</li>
    <li>Terassenzaun</li>
    <li>Boden ersetzen OG</li>
    <li>Fenster ersetzen OG</li>
    <li>Lamellenstoren mit Fernbedienung OG</li>
    </Ul>
    <h3>2018</h3>
    <Ul>
    <li>Terassenüberdachung für Gartensitzplatz</li>
    <li>Terassenabdeckung mit Bambusdielen</li>
    <li>Autoabstellplatz Renovierung</li>
    <li>Wasserhauptleitungersatz</li>
    </Ul>
    <h3>2017</h3>
    <Ul>
    <li>Fenster ersetzen EG</li>
    <li>Lamellenstoren mit Fernbedienung EG ung DG</li>
    <li>Heizungsanierung</li>
    <li>Gartenumbau</li>
    </Ul>
    <h3>2016</h3>
    <Ul>
    <li>Eingang und Küche umbau</li>
    <li>Badezimmersanierung</li>
    <li>Neue Badezimmer DG</li>
    <li>Neue Dachfenster installieren + Ausenrolladen mit Solarbetrieb und Fernbedienung Badezimmer DG</li>
    <li>Boden ersetzen EG und DG</li>
    <li>Komplett Malerei</li>
    </Ul>
    </Container>
  );
};

export default Renovation;
