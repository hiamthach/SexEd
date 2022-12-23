import { MantineProvider } from '@mantine/core';

import React from 'react';

interface IThemeProps {
  children: JSX.Element;
}

const ThemeProvider = ({ children }: IThemeProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          palate: ['#e0bbe4', '#957dad', '#d291bc', '#fec8d8', '#ffdfd3', '#9f43a9', '#b396c3', '#d291bc', '#f3e4f4', '#d19ad7'],
        },
        primaryColor: 'palate',
        primaryShade: 0,
        fontFamily: 'Open Sans, sans-serif',
      }}
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
