import React, { useEffect, useState } from 'react';
import Section from './Section';
import Header from '../assets/pages/Header';
import Footer from '../assets/pages/Footer';



const Index = () => {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme])
  return (
    <div className={`togglediv ${theme}`}>
      <Header />
      <Section />
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default Index;