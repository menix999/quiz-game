import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/ThemeProvider';
import { WindowWidthProvider } from './windowWidthContext/WindowWidthContext';
import { IsSideNavigationOpenProvider } from './isSideNavigationOpenContext/isSideNavigationOpenContext';

const MainProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <WindowWidthProvider>
        <IsSideNavigationOpenProvider>{children}</IsSideNavigationOpenProvider>
      </WindowWidthProvider>
    </ThemeProvider>
  );
};

export default MainProvider;
