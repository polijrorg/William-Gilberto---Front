import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import SideBar from '@components/SideBar';
import Header from '@components/Header';
import { VictoryPie } from 'victory-native';
import UserService from '@services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EstrategiaRealComponent from '@components/EstrategiaRealComponent';
import { Segment } from '@interfaces/RealStrategy';

interface DataProps {
  nome: string;
  numero: number;
  color: string;
}

const Estratégia_Real = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [data, setData] = useState<DataProps[]>([]);
  const [inData, setInData] = useState<Segment[]>([]);

  useEffect(() => {
    const get = async () => {
      const userid = await AsyncStorage.getItem("@app:userId");
      try {
        console.log("inData:");
        const aux = await UserService.GetUserRealStrategy(await userid);
        console.log(aux);
        setInData(aux.segments);  
      } catch(err) {
        console.log(err);
        setInData([]);
      }
      console.log(inData);
    }
    get();
    setData( [{nome: 'Ações',numero: 8, color: 'blue'},
      {nome: 'Fundos Imobiliários',numero: 7, color: 'yellow'},
      {nome: 'Renda Fixa',numero: 2, color: 'green'},
      {nome: 'Criptomoeda',numero: 3, color: 'lime'},
      {nome: 'Criptomoeda',numero: 4, color: 'purple'}
  ]);

  },[]);

  return(
  <S.Container align="normal">
    <StatusBar style="light" />
    <SideBar height={isOpen ? '100%' : '0px'} width={isOpen ? '80%' :'0%'} func={setIsOpen} isOpen={isOpen}/>
    <Header height={'60px'} width={isOpen ? '0%' :'100%'} text={`Estratégia Real`} func={setIsOpen} isOpen={isOpen} temSidebar={true}/>
    <S.GraphDiv height={"30%"}>
    <VictoryPie
      data={
      inData && Array.isArray(inData)
      ? inData.map((dado) => ({
          x: '',
          y: dado.value,
          color: dado.value,
      }))
          : []
      }
      colorScale={
          inData && Array.isArray(inData)
          ? data.map((dado) => (
              dado.color
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
      <S.StyledText>Estratégia Real</S.StyledText>
      <S.InvestDiv height="36%">
      <EstrategiaRealComponent height={'36px'} width={'90%'} segment={{id: '0', name: "Teste", value: 100}} color='#f10010'/>
      {inData && inData.length > 0 ? inData.map((segment, index) => (
      <EstrategiaRealComponent key={index} height={'36px'} width={'90%'} segment={segment} color={data[index].color}/>
      )) : <S.StyledText>No Data Available</S.StyledText>}
      </S.InvestDiv>  
    </S.Caixa>
  </S.Container>
)};

export default Estratégia_Real;
