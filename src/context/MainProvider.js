import React from 'react';
import { ToastContainer } from 'react-toastify';
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
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  );
};

export default MainProvider;
