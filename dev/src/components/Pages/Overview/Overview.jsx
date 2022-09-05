import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
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
      top: 11px;
      left: 0;
    }
    @media print {
      line-height: 24px;
      padding: 4px 0;
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

const Overview = () => {
  return (
    <Container>
      <p>In Affoltern am Albis verkaufen wir an ruhiger Quartierlage unser fein saniertes Reihenmittelhaus mit sehr grosszügigen Platzverhältnissen. 220 m² Gesamtnutzfläche verteilt auf 6.5 Zimmer, Nebenräume, Balkonen, Gartensitzplatz und 4 Geschosse.</p>
      <h3>Die Vorteile dieser Liegenschaft vermögen zu überzeugen:</h3>
      <Ul>
        <li>Im Dreieck von Zürich, Zug und Luzern</li>
        <li>Autobahnanschluss 5 Min</li>
        <li>Optimale Verkehrsverbindung: Postauto Nr 200 direkt nach Zürich 7 Min, Postauto Nr 225 zum Bahnhof 1 Min, Bahnhof 13 Min zu Fuss (Fahrzeit zum Zürich HB 25 Min, Zug 15 Min)</li>
        <li>Vollständige Infrastruktur: Schule und Kindergarten 2 Min, Einkaufsmöglichkeiten zu Fuss 7 Min, Bau- und Möbelmärkte in der Stadt, Freibad 1 Min</li>
        <li>220 m² Gesamtnutzfläche verteilt auf 6.5 Zimmer, Nebenräume und 4 Geschosse</li>
        <li>Offener, heller Wohn- und Essbereich mit direktem Zugang zum Gartensitzplatz</li>
        <li>Vollständig renoviert</li>
        <li>Zwei Badezimmer und ein Gäste WC</li>
        <li>Grosszügiger, schön ausgebauter Dachstock bietet viel Platz</li>
        <li>Ein Ausserparkplatz direkt vor dem Haus</li>
      </Ul>
    </Container>
  )
};

export default Overview;
