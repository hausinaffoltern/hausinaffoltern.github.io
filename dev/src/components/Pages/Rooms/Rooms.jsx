import React, {useContext} from 'react';
import Eg from './Eg';
import Og from './Og';
import Dg from './Dg';
import Ug from './Ug';
import styled from 'styled-components';
import translations from "../../common/translations";
import { LanguageContext } from '../../../hooks/useStore';

const Container = styled.article`
    flex-direction: column;
    padding: 0 20px 20px;
    h3 {
      span {
        @media print {
          display: none;
        }
      }
      @media print {
        margin-top: 50px;
      }
    }
`
const Fh3 = styled.h3`
  @media print {
    margin-top: 10px !important;
  }
`;

const Ph3 = styled.h3`
  @media print {
    margin-top: 130px !important;
  }
`;

const Rooms = () => {
  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }

  const t = v => translations(v,language);

  return (
    <Container>
      <Fh3>{t('eg')}<span> - {t('vt')}</span></Fh3>
      <Eg />
      <h3>{t('og')}<span> - {t('vt')}</span></h3>
      <Og />
      <Ph3>{t('dg')}<span> - {t('vt')}</span></Ph3>
      <Dg />
      <h3>{t('ug')}</h3>
      <Ug />
    </Container>
  );
};

export default Rooms;

