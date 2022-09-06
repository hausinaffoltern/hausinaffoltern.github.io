import React, { createContext, useEffect, useReducer } from "react";

export const LanguageContext = createContext();

const reducer = (actual, target) => target;
// const l = window.navigator.userLanguage || window.navigator.language;
export const DEFAULT_LANG = 'de'; //l ? l.substr(0, 2) : 'de'; 

export default props => {
  const [language, dispatch] = useReducer(reducer, '', () => localStorage.getItem('language') || DEFAULT_LANG);

  useEffect(()=> {
    localStorage.setItem('language', language);
  },[language]) 

  return (
    <LanguageContext.Provider value={{language, dispatch}}>
      {props.children}
    </LanguageContext.Provider>
  );
};
