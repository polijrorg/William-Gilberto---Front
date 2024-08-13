import * as S from './styles';
import LoginInputs from '@components/LoginInputs';
import ButtonComponent from "@components/ButtonComponent";
import BolaNumero from '@components/BolaNumero';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const Cadastro2 = () => (
  <S.Wrapper>
    <StatusBar style="light" />
    <BolaNumero num='1' width='48px' height='48px'/>
    <S.InputsDiv>
      <LoginInputs password={true} text='Senha:' height='60px'/>
      <LoginInputs password={true} text='Confirme a Senha:' height='60px'/>
    </S.InputsDiv>
    <ButtonComponent height='60px' color='#ffa800' width='36%' text='text' image='public/assets/images/Vector.png'/>
  </S.Wrapper>
);

export default Cadastro2;
