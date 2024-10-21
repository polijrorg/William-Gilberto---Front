import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import SideBar from '@components/SideBar';
import Header from '@components/Header';
import ButtonComponent from '@components/ButtonComponent';
import UserService from '@services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Pesquisar2 from '@components/Pesquisar2';
import Setup from '@interfaces/Setup';
import SetupComponent from '@components/SetupComponent';
import SetupModal from '@components/SetupModal';

const Setup_Indicadores = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [setups, setSetups] = useState<Setup[]>([]);
  const [reloader, setReloader] = useState(false);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  useFocusEffect(
    useCallback(() => {  
    const get = async () => {
      const userid = await AsyncStorage.getItem("@app:userId");
      const usersetups = await UserService.getAllUserSetups(await userid);
      setSetups(usersetups); 
    }
    get();
  },[reloader]));

  return(
  <S.Container align="center">
    <StatusBar style="light" />
    {modal ? <SetupModal visible={modal} setVisible={setModal}/> : null}
    <SideBar height={isOpen ? '100%' : '0px'} width={isOpen ? '80%' :'0%'} func={setIsOpen} isOpen={isOpen}/>
    <Header height={'60px'} width={isOpen ? '0%' :'100%'} text={`Setup de Indicadores`} func={setIsOpen} isOpen={isOpen} temSidebar={true}/>
    <S.Caixa>
      <Pesquisar2 height={'36%'} width={'90%'} color='#ebebeb' text='Pesquise seu setup' setups={setups.map((setup) => (setup.name))} func={setSearch} values={''}/>
      <S.StyledText>Meus Setups</S.StyledText>
      <ButtonComponent height={'36px'} width={'90%'} text='CRIAR NOVO SETUP' color='#FFA800' func={() => {setModal(true);}}/>
      <S.InvestDiv height="66%">
      {search==="" ? setups.map((setup,index) => 
        <SetupComponent key={index} height={'36px'} width={'100%'} setup={setup} reloader={reloader} setReloader={setReloader} warning={true}/>
      ) : setups.map((setup, index) => (
        setup.name.toLocaleUpperCase().includes(search.toLocaleUpperCase()) ?
        <SetupComponent key={index} height={'36px'} width={'100%'} setup={setup} reloader={reloader} setReloader={setReloader} warning={false}/>
        : null
      ))} 
      </S.InvestDiv>  
    </S.Caixa>
  </S.Container>
)};

export default Setup_Indicadores;
