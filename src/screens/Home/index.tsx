import * as S from './styles';
import LoginInputs from '@components/LoginInputs';
import ButtonComponent from "@components/ButtonComponent";
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const Home = () => (
  <S.Wrapper>
    <StatusBar style="light" />
    <S.Logo
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      source={require('public/assets/images/Logo.png')}
    />
    <S.InputsDiv>
      <LoginInputs password={false} text='Email' height='60px'/>
      <LoginInputs password={true} text='Senha' height='60px'/>
    </S.InputsDiv>
    <S.TextDivs>
      <S.StyledText>Cadastre-se</S.StyledText>
      <S.StyledText>Esqueci a senha</S.StyledText>
    </S.TextDivs>
    <ButtonComponent height='60px' width='80%' color='#ffa800' text='A v a n ç a r'/>
  </S.Wrapper>
);

export default Home;
