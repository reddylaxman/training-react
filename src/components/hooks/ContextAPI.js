import React, { createContext } from 'react'

const GlobalDataProvider=createContext();

export const ContextAPI = (props) => {
  return <GlobalDataProvider.Provider value="MRU">
  {props.children}
  </GlobalDataProvider.Provider>
}
