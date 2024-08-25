import * as S from './styles';
import CardPrincipal from '@components/CardPrincipal';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HeaderPrincipal from "@components/HeaderPrincipal";
import useAuth from '@hooks/useAuth';

const Principal = () => {

  const {user} = useAuth();
  return(
  <S.Wrapper>
    <StatusBar style="light" />
    <HeaderPrincipal height={'60px'} width={'100%'} text1={`Bem vindo, ${user.name}`} text2={'Restam 2 dias de teste'}/>
    <CardPrincipal height={'40%'} width={'90%'} text={'Estratégia Ideal'} color='#331c23'/>
    <CardPrincipal height={'40%'} width={'90%'} text={'Estratégia Real'} color='#331c23'/>
  </S.Wrapper>
)};

export default Principal;
