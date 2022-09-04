import React from 'react';
// import bg from '../../assets/bg.jpg'
// import home from '../../assets/home.jpg'
import gemeinde from '../../assets/gemeinde.jpg'
import kontakt from '../../assets/kontakt.jpg'
// import lage from '../../assets/lage.mp4'
import Overview from '../Pages/Overview';
import Renovation from '../Pages/Renovation';
import Kontakt from '../Pages/Kontakt';
import Photos from '../Pages/Photos';
import Lage from '../Pages/Lage';
import Gemeinde from '../Pages/Gemeinde';
import Infrastruktur from '../Pages/Infrastruktur';
import Privacy from '../Pages/Privacy';
import Eg from '../Pages/Rooms/Eg';
import Ug from '../Pages/Rooms/Ug';
import Dg from '../Pages/Rooms/Dg';
import Og from '../Pages/Rooms/Og';
import Facts from '../Pages/Facts';

const navItems = [
    {
      key: 'haus',
      value: 'Das Haus',
      component: <p>HAUS</p>,
      submenu: [
        {
          key: 'beschreibung',
          value: 'Beschreibung',
          component: <Overview />,
        },
        {
          key: 'renovierungen',
          value: 'Renovierungen',
          shortvalue: 'Sanierung',
          component: <Renovation />,
        },
        {
          key: 'detailbeschrieb',
          value: 'Detailbeschrieb',
          shortvalue: 'Fakten',
          component: <Facts />,
        },
      ]
    },
    {
      key: 'zimmer',
      value: 'Räume',
      component: <p>Räume</p>,
      //video: rooms,
      submenu: [
        {
          key: 'eg',
          value: 'Erdgeschoss',
          shortvalue: 'EG',
          component: <Eg />,
        },
        {
          key: 'og',
          value: 'Obergeschoss',
          shortvalue: 'OG',
          component: <Og />,
        },
        {
          key: 'dg',
          value: 'Dachgeschoss',
          shortvalue: 'DG',
          component: <Dg />,
        },
        {
          key: 'ug',
          value: 'Untergeschoss',
          shortvalue: 'UG',
          component: <Ug />,
        },
      ]
    },
    {
      key: 'umgebung',
      value: 'Umgebung',
      component: <p>Umgebung</p>,
      image: kontakt,
      submenu: [
        {
          key: 'lage',
          value: 'Lage',
          component: <Lage />,
        },
        {
          key: 'gemeinde',
          value: 'Gemeinde',
          image: gemeinde,
          component: <Gemeinde />,
        },
        {
          key: 'infrastruktur',
          value: 'Infrasturktur',
          component: <Infrastruktur />,
        },
      ]
    },
    {
      key: 'gallery',
      value: 'Fotos',
      component: <Photos />,
    },
    {
      key: 'kontakt',
      value: 'Kontakt',
      image: kontakt,
      component: <Kontakt />
    },
    {
      key: 'privacy',
      value: ' Datenschutzerklärung',
      component: <Privacy />
    },
  ];

  export default navItems;