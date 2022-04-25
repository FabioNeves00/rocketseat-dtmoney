import React from 'react';
import { Dashboard, Header } from './components/index';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
     <Header />
     <Dashboard/>
     <GlobalStyle />
    </>
  );
}

export default App;
