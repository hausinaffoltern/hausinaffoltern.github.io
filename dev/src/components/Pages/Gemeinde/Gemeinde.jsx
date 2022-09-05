import React from 'react';
import gemeinde from '../../../assets/umgebung/gemeinde.jpg'
import styled from 'styled-components';

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

const Link = styled.a`
  text-decoration: none;
  color: #464;
`;

const Printp = styled.p`
  @media print {
    display: none;
  }
`;

const Gemeinde = () => {
  return (<Container>
    <p>8910 Affoltern am Albis liegt im Bezirk Knonaueramt, im Kanton Zürich. </p>

    <p>In Affoltern am Albis neben traditionsverbundenen Unternehmen neue, moderne Firmen und Geschäfte Platz gefunden, die das Regionalzentrum weitherum bekannt machen. Affoltern am Albis ist Sitz verschiedener öffentlicher Einrichtungen und Dienste, die sich gegenseitig ergänzen und ein Netz sozialer Sicherheit bieten. Für die Freizeitgestaltung stehen ein Freibad und Sportanlagen sowie über 100 Vereine zur Verfügung.</p>

    <p>Die Gemeinde Affoltern am Albis wurde per 1. Juli 2018 zur Stadt Affoltern am Albis. Auch wenn man in Affoltern am Albis nicht mehr die einstige ländliche Idylle vorfindet, bietet der Ort seinen über 12'000 Einwohnern mit seiner sonnigen, zentralen Lage zwischen den Metropolen Zürich, Zug und Luzern, den guten Verkehrsverbindungen und den grösstenteils gut in die Landschaft eingefügten Überbauungen, dem vielen Grün und der unüberbaubaren Umgebung eine vorzügliche Wohnqualität und eine ansprechende Umwelt.</p>

    <Printp>Mehrere Fakten über Affoltern a.A: <Link href="https://www.raiffeisen.ch/rch/de/privatkunden/hypotheken/gemeindeinfo.affoltern-am-albis.html" target="_blank">hier</Link></Printp>

    
    <MapContainer>
    <Image><img alt="Affoltern am Albis" src={gemeinde} /></Image>
      </MapContainer>
    </Container>
  );
};

export default Gemeinde;

