import AppProvider from '@hooks/index';
// import Home from '@screens/Home';
import Cadastro1 from '@screens/Cadastro1';
// import Cadastro2 from '@screens/Cadastro2';
import React from 'react';

export default function App() {
  return (
    <AppProvider>
      <Cadastro1 />
    </AppProvider>
  );
}
