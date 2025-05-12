import React, { createContext } from 'react';

const ContextCreation = createContext({});

export const Provider = ({ children }: any) => {
  const [context, setContext] = React.useState(0);
  return (
    <ContextCreation.Provider value={{ context, setContext }}>
      {children}
    </ContextCreation.Provider>
  );
};

export const Context = () => {
  const { context, setContext } = React.useContext(ContextCreation);
  return (
    <>
      <div data-testid="context-value">Context : {context}</div>
      <button data-testid="handleEvent" onClick={() => setContext(context + 1)}>
        Click Here
      </button>
    </>
  );
};
