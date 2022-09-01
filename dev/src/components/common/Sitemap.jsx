import React from 'react';
import bg from '../../assets/bg.jpg'
import Overview from '../Pages/Overview';

const navItems = [
    {
      key: 'haus',
      value: 'Das Haus',
      component: <>HAUS</>,
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
      component: <>Räume</>,
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
      component: <>Umgebung</>,
      submenu: [
        {
          key: 'lage',
          value: 'Lage',
        },
        {
          key: 'gemeinde',
          value: 'Gemeinde',
        },
        {
          key: 'infrastruktur',
          value: 'Infrasturktur',
        },
      ]
    },
    {
      key: 'gallery',
      value: 'Impressionen',
      component: <>Impressionen</>,
    },
    {
      key: 'kontakt',
      value: 'Kontakt',
      image: bg,
      component: <>Kontakt</>,
    },
  ];

  export default navItems;