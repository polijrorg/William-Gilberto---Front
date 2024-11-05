/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Header from '@components/Header';
import CreateInvestInputs from '@components/CreateInvestInput';
import CreateInvestButton from '@components/CreateInvestButton';
// import { View, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateAporte = ({navigation}) => {

  const [valor, setValor] = useState(0);

  return(
  <S.Wrapper>
    <StatusBar style="light" />
    <Header text={'Novo Aporte'} height={'60px'} width={'100%'} func={null} isOpen={false} temSidebar={false}/>
    <S.InputsDiv>
      <CreateInvestInputs  password={false} mode="input" text='Valor do novo aporte' height='60px' boxtext='Digite aqui...' func={setValor} value={''}/>
    </S.InputsDiv>
    <S.Box>
    <CreateInvestButton height='60px' color='#1c0f13' width='100%' text='C A L C U L A R' func={() => {
      navigation.navigate("Sugestao");
    }}/>
    </S.Box>
  </S.Wrapper>
  );
};

export default CreateAporte;
