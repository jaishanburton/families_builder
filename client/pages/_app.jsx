import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Component {...pageProps} theme={theme} />
    </>
  );
}

export default MyApp;
