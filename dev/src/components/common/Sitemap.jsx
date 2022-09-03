import React from 'react';
import bg from '../../assets/bg.jpg'
import home from '../../assets/home.jpg'
import lage from '../../assets/lage.mp4'
import Overview from '../Pages/Overview';
import Kontakt from '../Pages/Kontakt';
import Photos from '../Pages/Photos';
import Lage from '../Pages/Lage';
import Gemeinde from '../Pages/Gemeinde';
import Infrastruktur from '../Pages/Infrastruktur';

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
          key: 'detailbeschrieb',
          value: 'Detailbeschrieb',
        },
        {
          key: 'grundriss',
          value: 'Grundriss',
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
        },
        {
          key: 'og',
          value: 'Obergeschoss',
        },
        {
          key: 'dg',
          value: 'Dachgeschoss',
        },
        {
          key: 'ug',
          value: 'Untergeschoss',
        },
      ]
    },
    {
      key: 'umgebung',
      value: 'Umgebung',
      component: <p>Umgebung</p>,
      video: lage,
      submenu: [
        {
          key: 'lage',
          value: 'Lage',
          component: <Lage />,
        },
        {
          key: 'gemeinde',
          value: 'Gemeinde',
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
      value: 'Impressionen',
      component: <Photos />,
    },
    {
      key: 'kontakt',
      value: 'Kontakt',
      image: bg,
      component: <Kontakt />
    },
  ];

  export default navItems;