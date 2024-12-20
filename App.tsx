import AppProvider from '@hooks/index';
import { AuthProvider } from '@hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>   
      <AuthProvider>
        <AppProvider>
          <Routes />
        </AppProvider>        
      </AuthProvider>   
    </NavigationContainer>
  );
}
