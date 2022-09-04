import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  padding: 0 0 20px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #464;
`;

const Gemeinde = () => {
  return (<Container>
    <p>8910 Affoltern am Albis liegt im Bezirk Knonaueramt, im Kanton Zürich. </p>

    <p>In Affoltern am Albis neben traditionsverbundenen Unternehmen neue, moderne Firmen und Geschäfte Platz gefunden, die das Regionalzentrum weitherum bekannt machen. Affoltern am Albis ist Sitz verschiedener öffentlicher Einrichtungen und Dienste, die sich gegenseitig ergänzen und ein Netz sozialer Sicherheit bieten. Für die Freizeitgestaltung stehen ein Freibad und Sportanlagen sowie über 100 Vereine zur Verfügung.</p>

    <p>Die Gemeinde Affoltern am Albis wurde per 1. Juli 2018 zur Stadt Affoltern am Albis. Auch wenn man in Affoltern am Albis nicht mehr die einstige ländliche Idylle vorfindet, bietet der Ort seinen über 12'000 Einwohnern mit seiner sonnigen, zentralen Lage zwischen den Metropolen Zürich, Zug und Luzern, den guten Verkehrsverbindungen und den grösstenteils gut in die Landschaft eingefügten Überbauungen, dem vielen Grün und der unüberbaubaren Umgebung eine vorzügliche Wohnqualität und eine ansprechende Umwelt.</p>

    <p>Mehrere Fakten über Affoltern a.A: <Link href="https://www.raiffeisen.ch/rch/de/privatkunden/hypotheken/gemeindeinfo.affoltern-am-albis.html" target="_blank">hier</Link></p>

    
    <MapContainer>
      <iframe title="gemeinde" src="https://www.google.com/maps/d/u/0/embed?mid=1ie07oENDuo85FUB7jUT0C3bPcwiHh9k&hl=de&ehbc=2E312F" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </MapContainer>
    </Container>
  );
};

export default Gemeinde;

