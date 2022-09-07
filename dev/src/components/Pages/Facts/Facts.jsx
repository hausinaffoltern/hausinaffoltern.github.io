import React, {useContext} from 'react';
import styled from 'styled-components';
import translations from "../../common/translations";
import { LanguageContext } from '../../../hooks/useStore';

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
  display: flex;
  @media (max-width: 1009px) {
    flex-direction: column; 
  }
  @media (max-width: 480px) {
    flex-direction: column; 
  }
`;

const EContainer = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
  display: flex;
  @media (max-width: 1009px) {
    flex-direction: column; 
  }
  @media print {
    flex-direction: row; 
    padding: 0 20px 0;
  }
`;

const Content = styled.article`
  flex-basis: 50%;  
  margin-right: 20px;
  @media (max-width: 1009px) {
    margin-right: 0;
  }
`;

const Dl = styled.dl`
  display: flex;
  flex-wrap: wrap;
`;

const Dt = styled.dt`
  font-weight: bold;
  border-bottom: 1px solid #9a9;
  flex-basis: calc(50% - 20px);  
  padding: 10px;
  @media print {
    padding: 8px 10px;
  }
`;

const Dd = styled.dd`
  border-bottom: 1px solid #9a9;
  flex-basis: calc(50% - 20px);  
  margin: 0;
  color: #676;
  padding: 10px;
  @media print {
    padding: 8px 10px;
  }
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
  }
  @media print {
    list-style-type: square;
  }
}
`;

const Facts = () => {
  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }

  const t = v => translations(v,language);

  return (
    <Container>
      <Content>
        <h3>{t('keydata')}</h3>
        <Dl>
          <Dt>{t('available')}</Dt>   <Dd>November 2022</Dd>
          <Dt>{t('rooms')}</Dt>   <Dd>6.5</Dd>
          <Dt>{t('bathroom')}</Dt>   <Dd>3</Dd>
          <Dt>{t('year')}</Dt>   <Dd>1979</Dd>
          <Dt>{t('renovation')}</Dt>   <Dd>2021</Dd>
          <Dt>{t('heating')}</Dt>   <Dd>{t('heatingv')}</Dd>
          <Dt>{t('heatdistribution')}</Dt>   <Dd>{t('heatdistributionv')}</Dd>
        </Dl>
        <h3>{t('offer')}</h3>
        <Dl>
          <Dt>{t('price')}</Dt>   <Dd>{t('pricev')}</Dd>
        </Dl>
      </Content>
      <Content>
        <h3>{t('surface')}</h3>
        <Dl>
          <Dt>{t('space')}</Dt>   <Dd>168m²</Dd>
          <Dt>{t('land')}</Dt>   <Dd>218m²</Dd>
          <Dt>{t('landsum')}</Dt>   <Dd>220m²</Dd>
          <Dt>{t('volume')}</Dt>   <Dd>678m³</Dd>
        </Dl>
        <h3>{t('character')}</h3>
        <EContainer>
          <Content>
            <Ul>
            {t('characteristics1')}
            </Ul>
          </Content>
          <Content>
            <Ul>
            {t('characteristics2')}
            </Ul>
          </Content>
        </EContainer>
      </Content>
    </Container>
  )
};

export default Facts;
