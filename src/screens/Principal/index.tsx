import * as S from './styles';
import CardPrincipal from '@components/CardPrincipal';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import HeaderPrincipal from "@components/HeaderPrincipal";
import useAuth from '@hooks/useAuth';
import SideBar from '@components/SideBar';

const Principal = () => {
  const {user} = useAuth();
  const [isOpen,setIsOpen] = useState(false);

  return(
  <S.Container align="normal">
    <StatusBar style="light" />
    <SideBar height={isOpen ? '100%' : '0px'} width={isOpen ? '80%' :'0%'} func={setIsOpen} isOpen={isOpen}/>
    <HeaderPrincipal height={'60px'} width={isOpen ? '0%' :'100%'} text1={`Bem vindo, ${user.name}`} text2={'Restam 2 dias de teste'} func={setIsOpen} isOpen={isOpen}/>
    <CardPrincipal height={'40%'} width={isOpen ? '0%' :'100%'} text={'Estratégia Ideal'} color='#331c23'/>
    <CardPrincipal height={'40%'} width={isOpen ? '0%' :'100%'} text={'Estratégia Real'} color='#331c23'/>
  </S.Container>
)};

export default Principal;
