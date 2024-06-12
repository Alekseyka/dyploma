import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from "@/components/Header";
import '@/app/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/themes/index';

export default async function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
      <body>
      <CssBaseline/>
      <Header/>
      <Container>
        {children}
      </Container>
      </body>
      </html>
    </ThemeProvider>
  );
};
