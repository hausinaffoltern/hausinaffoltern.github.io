import React, {useContext} from 'react';
import styled from 'styled-components';
import translations from "../../common/translations";
import { LanguageContext } from '../../../hooks/useStore';

const Container = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px 30px;
  @media print {
    h3 {
      padding: 10px 0;
      margin 0;
    }
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
      top: 50%;
      margin-top: -5px;
      left: 0;
    }
    @media print {
      line-height: 24px;
      padding-left: 0;
      &::before {
        display: none;
      }
    }
  }
  @media print {
    margin-left: 20px;
    padding: 0;
    list-style-type: square;
  }
}
`;

const Renovation = () => {
  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }
  return (
    <Container>
      <h3>2016</h3>
      <Ul>
      {translations('r2016', language)}
      </Ul>
      <h3>2017</h3>
      <Ul>
      {translations('r2017', language)}
      </Ul>
      <h3>2018</h3>
      <Ul>
      {translations('r2018', language)}
      </Ul>
      <h3>2019</h3>
      <Ul>
      {translations('r2019', language)}
      </Ul>
      <h3>2020</h3>
      <Ul>
      {translations('r2020', language)}
      </Ul>
      <h3>2021</h3>
      <Ul>
      {translations('r2021', language)}
      </Ul>
    </Container>
  );
};

export default Renovation;
