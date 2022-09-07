import React from 'react';
import gemeinde from '../../assets/gemeinde.jpg'
import kontakt from '../../assets/kontakt.jpg'
import lage from '../../assets/lage.jpg'
import infra from '../../assets/infra.jpg'
import beschreibung from '../../assets/beschreibung.jpg'
import detailbeschrieb from '../../assets/detailbeschrieb.jpg'
import renovierungen from '../../assets/renovierungen.jpg'
import Overview from '../Pages/Overview';
import Renovation from '../Pages/Renovation';
import Kontakt from '../Pages/Kontakt';
import Photos from '../Pages/Photos';
import Lage from '../Pages/Lage';
import Gemeinde from '../Pages/Gemeinde';
import Infrastruktur from '../Pages/Infrastruktur';
import Privacy from '../Pages/Privacy';
import Rooms from '../Pages/Rooms';
import Facts from '../Pages/Facts';

const navItems = [
    {
      key: 'haus',
      value: 'navhaus',
      submenu: [
        {
          key: 'beschreibung',
          value: 'navoverview',
          image: beschreibung,
          component: <Overview />,
        },
        {
          key: 'renovierungen',
          value: 'navrenovation',
          shortvalue: 'navrenovation_short',
          image: renovierungen,
          component: <Renovation />,
        },
        {
          key: 'detailbeschrieb',
          value: 'navdetails',
          shortvalue: 'navdetails_short',
          image: detailbeschrieb,
          component: <Facts />,
        },
      ]
    },
    {
      key: 'zimmer',
      value: 'navrooms',
      component: <Rooms />,
    },
    {
      key: 'umgebung',
      value: 'Umgebung',
      image: kontakt,
      submenu: [
        {
          key: 'lage',
          value: 'navposition',
          image: lage,
          component: <Lage />,
        },
        {
          key: 'gemeinde',
          value: 'navcommunity',
          image: gemeinde,
          component: <Gemeinde />,
        },
        {
          key: 'infrastruktur',
          value: 'navinfra',
          image: infra,
          component: <Infrastruktur />,
        },
      ]
    },
    {
      key: 'gallery',
      value: 'navphotos',
      component: <Photos />,
    },
    {
      key: 'kontakt',
      value: 'navcontact',
      image: kontakt,
      component: <Kontakt />
    },
    {
      key: 'datenschutz',
      value: 'navprivacy',
      component: <Privacy />
    },
  ];

  export default navItems;