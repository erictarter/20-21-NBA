import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [westPicks, setWestPicks] = useState([]);
  const [eastPicks, setEastPicks] = useState([]);
  const [westPicksFill, setWestPicksFill] = useState([]);
  const [eastPicksFill, setEastPicksFill] = useState([]);

  const value = {
    userName,
    setUserName,
    westPicks,
    setWestPicks,
    eastPicks,
    setEastPicks,
    westPicksFill,
    setWestPicksFill,
    eastPicksFill,
    setEastPicksFill
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
