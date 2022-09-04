
import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  position: absolute;
  top: 30px;
  bottom: 30px;
  left: 30px;
  right: 30px; 
`;

export const vr = [
    {
        key: 'dg_bad',
        value: 'a3e860dfe5e34c7e802cf8fe78b452bd',
    },
    {
        key: 'dg_schlafzimmer',
        value: '4484ebea715549ccb22abbdadab5dabd',
    },
    {
        key: 'dg_wohnzimmer',
        value: '722bd290eab846a18ecf2ff784594c49',
    },
    {
        key: 'dg',
        value: '5c3f4134e1dd48adadc0c7e74c575b0a',
    },


    {
        key: 'eg',
        value: '3d63a0b2b7fd44f0aa0542e29f300d20',
    },
    {
        key: 'eg_kuche',
        value: 'eb0010ffc64544de8d46c1ecbc636500',
    },
    {
        key: 'eg_vorplatz',
        value: 'adc31cc080dc42d7b81a444945c136c3',
    },
    {
        key: 'eg_wohnzimmer1',
        value: '8ddddffda451417c84314c89a2b42174',
    },
    {
        key: 'eg_wohnzimmer2',
        value: '6bd599af966c4c3d92e8842275c66b9d',
    },
    {
        key: 'eg_wc',
        value: '0a8cef8ba6fe4d769ec709c14db41d9b',
    },


    {
        key: 'og_bad',
        value: 'df1f5b5fa35a42b9a70bacc51ae8d697',
    },
    {
        key: 'og',
        value: '36fdb8c37a2143adb0483ace01f81b11',
    },
    {
        key: 'og_buro',
        value: 'abf638eb77594837ba05a76d7aa08657',
    },
    {
        key: 'og_schlafzimmer1',
        value: 'b4596d765ef14fc7b6b7fe0a66920f0a',
    },
    {
        key: 'og_schlafzimmer2',
        value: 'e63144c3b5cc4fcebc3ac6ca0d215aa3',
    },
];
const getBaseUrl = code => `https://momento360.com/e/u/${code}?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium`;

export const getSrc = name => {
    const item = vr.find(e => e.key === name);
    return item ? getBaseUrl(item.value) : '';
}

export const getSource = src => <Iframe src={src} width="80%" height="80%" frameborder="0" allow="autoplay; fullscreen" allowFullScreen />
  

