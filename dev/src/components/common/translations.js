import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InlineLink = styled(Link)`
  color: #676;
  text-decoration: none;
`;

const Printspan = styled.span`
display: none;
@media print {
  display: inline;
}
`; 
const Normalspan = styled.span`
display: inline;
@media print {
  display: none;
}
`; 

const translations = {
    de: {
        h1: 'Haus in Affoltern am Albis',
        navhaus: 'Das Haus',
        navrooms: 'Räume',
        navenv: 'Umgebung',
        navphotos: 'Fotos',
        navcontact: 'Kontakt',
        navoverview: 'Beschreibung',
        navrenovation: 'Renovierungen',
        navrenovation_short: 'Sanierung',
        navdetails: 'Detailbeschrieb',
        navdetails_short: 'Fakten',
        navposition: 'Lage',
        navcommunity: 'Gemeinde',
        navinfra: 'Infrastruktur',
        navprivacy: 'Datenschutzerklärung',
        h2: 'Reihenfamilienhaus am familienfreundlichen und ruhigen Erlenweg',
        header: 'In Affoltern am Albis verkaufen wir an ruhiger Quartierlage unser fein saniertes Reihenmittelhaus mit sehr grosszügigen Platzverhältnissen. 220 m² Gesamtnutzfläche verteilt auf 6.5 Zimmer, Nebenräume, Balkonen, Gartensitzplatz und 4 Geschosse.',
        address: 'Adresse',
        addressv: <>Erlenweg 4, 8910<br />Affoltern am Albis, Schweiz</>,
        object: 'Objektart',
        objectv: 'Reihenmittelhaus',
        price: 'Verkaufspreis',
        pricev: 'SFr. 1\'450\'000.-',
        available: 'Verfügbar ab',
        space: 'Nettowohnfläche',
        rooms: 'Zimmer',
        year: 'Baujahr',
        renovation: 'Letzte renovation',
        land: 'Grundstücksfläche',
        contacttext: <>Falls Sie Interesse haben und einen Besichtigungstermin vereinbaren möchten, bitte kontaktieren Sie uns via untenstehende<Printspan>n Erreichbarkeiten</Printspan><Normalspan>m Kontaktformular</Normalspan>.</>,
        firstname: 'Vorname',
        lastname: 'Nachname',
        message: 'Nachricht',
        phone: 'Telefon',
        email: 'E-mail Adresse',
        send: 'Anfrage senden',
        thankyou: <>Danke!<br />Ihre Nachricht ist zugeschickt.</>,
        legal: <>Mit dem Senden dieser Anfrage stimme ich zu, dass hausinaffoltern.online meine Daten wie in die&nbsp;<InlineLink to="/datenschutz">Datenschutzerklärung</InlineLink>&nbsp;beschrieben verarbeiten darf.</>,
        advantagestitle: 'Die Vorteile dieser Liegenschaft vermögen zu überzeugen:',
        advantages:<>
        <li>Im Dreieck von Zürich, Zug und Luzern</li>
        <li>Autobahnanschluss 5 Min</li>
        <li>Optimale Verkehrsverbindung: Postauto Nr 200 direkt nach Zürich 7 Min, Postauto Nr 225 zum Bahnhof 1 Min, Bahnhof 13 Min zu Fuss (Fahrzeit zum Zürich HB 25 Min, Zug 15 Min)</li>
        <li>Vollständige Infrastruktur: Schule und Kindergarten 2 Min, Einkaufsmöglichkeiten zu Fuss 7 Min, Bau- und Möbelmärkte in der Stadt, Freibad 1 Min</li>
        <li>220 m² Gesamtnutzfläche verteilt auf 6.5 Zimmer, Nebenräume, Balkonen, Gartensitzplatz und 4 Geschosse</li>
        <li>Offener, heller Wohn- und Essbereich mit direktem Zugang zum Gartensitzplatz</li>
        <li>Vollständig renoviert</li>
        <li>Zwei Badezimmer und ein Gäste WC</li>
        <li>Grosszügiger, schön ausgebauter Dachstock bietet viel Platz</li>
        <li>Ein Ausserparkplatz direkt vor dem Haus</li></>,
        privacy: 'Datenschutzerklärung',
    },
    en: {
        h1: 'House in Affoltern am Albis',
        navhaus: 'The House',
        navrooms: 'Rooms',
        navenv: 'Environment',
        navphotos: 'Gallery',
        navcontact: 'Contact',
        navoverview: 'Overview',
        navrenovation: 'Renovations',
        navrenovation_short: 'Renovation',
        navdetails: 'Details',
        navdetails_short: 'Facts', 
        navposition: 'Area',
        navcommunity: 'Community',
        navinfra: 'Infrastructure',
        navprivacy: 'Privacy policy',
        h2: 'Terraced family house on the family-friendly and quiet Erlenweg',
        header: 'In Affoltern am Albis, we are selling our finely renovated mid-terrace house with very generous space in a quiet neighborhood. 220 m² of total floor space spread over 6.5 rooms, adjoining rooms, balconies, patio and 4 floors.',
        address: 'Address',
        addressv: <>Erlenweg 4, 8910<br />Affoltern am Albis, Switzerland</>,
        object: 'Object type',
        objectv: 'Mid-terrace house',
        price: 'Selling price',
        pricev: 'CHF 1.450.000,-',
        available: 'Available from',
        space: 'Floorspace',
        rooms: 'Rooms',
        year: 'Construction year',
        renovation: 'Last renovation',
        land: 'Land area',
        contacttext: <>If you are interested and would like to arrange a viewing appointment, please contact us using <Printspan>one of the following availabilities</Printspan><Normalspan>the contact form below</Normalspan>.</>,
        firstname: 'Firstname',
        lastname: 'Lastname',
        message: 'Message',
        phone: 'Phone',
        email: 'E-mail address',
        send: 'Send request',
        thankyou: <>Thank you!<br />your message has been sent.</>,
        legal: <>By sending this request, I agree that hausinaffoltern.online may process my data as described in the&nbsp;<InlineLink to="/datenschutz">privacy policy</InlineLink></>,
        advantagestitle: 'The advantages of this property are convincing:',
        advantages:<><li>In the triangle between Zurich, Zug and Lucerne</li>
        <li>Freeway connection 5 minutes</li>
        <li>Optimal transport connections: Bus No. 200 directly to Zurich 7 min, Bus No. 225 to the train station 1 min, train station 13 min on foot (journey to Zurich main station 25 min, Zug 15 min)</li>
        <li>Complete infrastructure: school and kindergarten 2 minutes, shops 7 minutes on foot, hardware and furniture stores in the city, outdoor pool 1 minute</li>
        <li>220 m² total floor space spread over 6.5 rooms, adjoining rooms, balconies, patio and 4 floors</li>
        <li>Open, bright living and dining area with direct access to the patio</li>
        <li>Fully renovated</li>
        <li>Two bathrooms and a guest toilet</li>
        <li>Generous, beautifully developed attic offers plenty of space</li>
        <li>An outdoor parking space directly in front of the house</li></>,
        privacy: 'Privacy policy',
    },
};

export default (key, lang) => {
    const a = Object.keys(translations).find(item => item === lang)
    return translations[a][key] || translations.de[key];
}
