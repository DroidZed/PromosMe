import React, { createContext, useState } from 'react';

const initialState = { favorites: [] };

const store = createContext(initialState);

const { Provider } = store;

const FavsProvider = (props) => {
  const [State, setState] = useState(initialState);

  return <Provider value={{ State, setState }}>{props.children}</Provider>;
};

export { store, FavsProvider };
