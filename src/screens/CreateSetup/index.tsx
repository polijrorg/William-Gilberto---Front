/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import Header from '@components/Header';
import Pesquisar2 from '@components/Pesquisar2';
import ButtonComponent from '@components/ButtonComponent';
import { useFocusEffect } from '@react-navigation/native';
import UserService from '@services/UserService';
import TableComponent from '@components/TableComponent';
// import { View, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

type DataItem = {
  id: string;
  resultado: string;
  tipo: string;
  num1?: string;
  num2?: string;
};

const CreateSetup = ({navigation, route}) => {
  const {name} = route.params;
  const [search, setSearch] = useState("");
  const [reloader, setReloader] = useState(false);
  const [options, setOptions] = useState<string[]>([]);

  const [data, setData] = useState<DataItem[]>([
    {
      id: '1',
      resultado: 'BOM',
      tipo: 'INTERVALADO',
      num1: '10',
      num2: '20',
    },
    {
      id: '2',
      resultado: 'REGULAR',
      tipo: 'MAIOR QUE',
      num1: '30',
    },
    {
      id: '3',
      resultado: 'RUIM',
      tipo: 'MENOR QUE',
      num1: '15',
    }
  ]);
  

  useFocusEffect(
    useCallback(() => {  
    const get = async () => {
      const usersetups = await UserService.GetAllIndicators();
      setOptions(usersetups.map((ind) => (ind.name)));
      console.log("Options:",options);
    }
    get();
  },[reloader]));

  return(
    <S.Wrapper>
        <StatusBar style="light" />
        <Header text={name} height={'60px'} width={'100%'} func={null} isOpen={false} temSidebar={false}/>
        <S.Margin margin={"32px"}>
          <Pesquisar2 height={'40px'} width={'90%'} color='#ebebeb' setups={options} text={"Pesquisar seus indicadores ativos"} func={setSearch} values={''}/>
        </S.Margin>
        <TableComponent data={data} setData={setData}/>
        <S.Margin margin={"128px"}>
          <ButtonComponent text={"SALVAR"} color='#ffa800' height={'60px'} width={'60%'} func={() => {navigation.navigate("Setup_Indicadores")}}/>
        </S.Margin>
    </S.Wrapper>

  );
};

export default CreateSetup;
