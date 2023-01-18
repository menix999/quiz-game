import { createContext, useContext, useEffect, useState } from 'react';

const getWindowParams = () => {
  return {
    width: window.innerWidth,
    isMobile: window.innerWidth <= 900,
  };
};

const initialState = getWindowParams();

const WindowWidthStateContext = createContext(initialState);

export const WindowWidthProvider = ({ children }) => {
  const [windowState, setWindowState] = useState(initialState);

  useEffect(() => {
    const handleSetWindowState = () => {
      setWindowState(getWindowParams());
    };

    window.addEventListener('resize', handleSetWindowState);

    return () => {
      window.removeEventListener('resize', handleSetWindowState);
    };
  }, []);

  return (
    <WindowWidthStateContext.Provider value={windowState}>
      {children}
    </WindowWidthStateContext.Provider>
  );
};

export const useWindowWidthState = () => useContext(WindowWidthStateContext);
