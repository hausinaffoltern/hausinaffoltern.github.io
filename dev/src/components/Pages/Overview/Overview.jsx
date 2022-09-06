import React, {useContext} from 'react';
import styled from 'styled-components';
import translations from "../../common/translations";
import { LanguageContext } from '../../../hooks/useStore';

const Container = styled.article`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
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
    @media print {
      line-height: 24px;
      padding: 4px 0;
      &::before {
        display: none;
      }
    }
  }
  @media print {
    margin-left: 20px;
    padding: 0;
    list-style-type: square;
    li {
      line-height: 22px;
    }
  }
}
`;

const Overview = () => {
  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }
  return (
    <Container>
      <p>{translations('header', language)}</p>
      <h3>{translations('advantagestitle', language)}</h3>
      <Ul>
      {translations('advantages', language)}
      </Ul>
    </Container>
  )
};

export default Overview;
