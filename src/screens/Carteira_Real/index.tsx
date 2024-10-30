/* eslint-disable react/prop-types */
import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import SideBar from '@components/SideBar';
import Header from '@components/Header';
import { VictoryPie } from 'victory-native';
import Pesquisar from '@components/Pesquisar';
import ButtonComponent from '@components/ButtonComponent';
import Investimento from '@components/Investimento';
import UserService from '@services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Investments from '@interfaces/Investment';
import { useFocusEffect } from '@react-navigation/native';
import { Segment } from '@interfaces/RealStrategy';
import { theme } from '@styles/default.theme';

const Carteira_Real = ({navigation}) => {
  const [isOpen,setIsOpen] = useState(false);
  const [inData, setInData] = useState<Investments[]>([]);
  const [reloader, setReloader] = useState(false);
  const [segments, setSegments] = useState<Segment[]>([]);
  const [search, setSearch] = useState("");

  // const cor = theme.colors.segments["imobiliario"];
  const params = {isReal: true}  

  useFocusEffect(
    useCallback(() => {  
    const get = async () => {
      const userid = await AsyncStorage.getItem("@app:userId");
      const aux = await UserService.GetUserRealStrategy(await userid);
      setSegments(aux.segments);
      setInData(await UserService.getUserInvestmentsRealWallet(await userid)); 
    }
    get();
  },[reloader]));

  return(
  <S.Container align="normal">
    <StatusBar style="light" />
    <SideBar height={isOpen ? '100%' : '0px'} width={isOpen ? '80%' :'0%'} func={setIsOpen} isOpen={isOpen}/>
    <Header height={'60px'} width={isOpen ? '0%' :'100%'} text={`Carteira Real`} func={setIsOpen} isOpen={isOpen} temSidebar={true}/>
    <S.GraphDiv height={"30%"}>
    <VictoryPie
      data={
      segments && Array.isArray(segments)
      ? segments.map((dado) => ({
          x: '',
          y: dado.value,
      }))
          : []
      }
      colorScale={
          segments && Array.isArray(segments)
          ? segments.map((dado) => (
              theme.colors.segments[dado.name.toLocaleLowerCase()]
          ))
          : []
      }
      padding={{ top: 0, bottom: 180, right: 0, left: 72 }}
      width={340}
      radius={80}
      innerRadius={60}
      labels={() => null} 
    />
    </S.GraphDiv>
    <S.Caixa>
      <S.StyledText>Meus Investimentos</S.StyledText>
      <Pesquisar height={'36%'} width={'90%'} color='#331C23' text='Pesquisar Investimento...' invests={inData} func={setSearch}/>
      <ButtonComponent height={'36px'} width={'90%'} text='Adicionar novo Investimento' color='#FFA800' func={() => {navigation.navigate("CreateInvest", params);}}/>
      <S.InvestDiv height="36%">
      {search==="" ? inData.map((invest,index) => 
        <Investimento key={index} color={theme.colors.segments[invest.segment.toLocaleLowerCase()]} height={'72px'} width={'100%'} invest={invest} reloader={reloader} setReloader={setReloader}/>
      ) : inData.map((invest, index) => (
        invest.asset.toLocaleUpperCase().includes(search.toLocaleUpperCase()) ?
        <Investimento key={index} color={theme.colors.segments[invest.segment.toLocaleLowerCase()]} height={'72px'} width={'100%'} invest={invest} reloader={reloader} setReloader={setReloader}/>
        : null
      ))} 
      </S.InvestDiv>  
    </S.Caixa>
  </S.Container>
)};

export default Carteira_Real;
