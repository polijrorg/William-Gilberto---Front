/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/prop-types */
import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import CreateInvestInputs from '@components/CreateInvestInput';
import UserService from '@services/UserService';
import CreateInvestButton from '@components/CreateInvestButton';
import Dropdown from '@components/DropDown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Setup from '@interfaces/Setup';
// import { View, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateInvest = ({navigation, route}) => {
  const {isReal} = route.params;

  const [tipoOptions, setTipoOptions] = useState<string[] | null>(null)
  const [tipo, setTipo] = useState<string | null>(null);
  
  const [ticker, setTicker] = useState('');
  const [cotas, setCotas] = useState('');

  const [setupOptions, setSetupOptions] = useState<string[] | null>(null)
  const [setup, setSetup] = useState<string | null>(null);
  const [setups, setSetups] = useState<Setup[]>([]);

  const [error, setError] = useState('');
  const [bool, setBool] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {
        // const userid = await AsyncStorage.getItem("@app:userId");
        const aux1 = UserService.getAllSegmentsNames();
        const usersetups = await UserService.getAllUserSetups(await AsyncStorage.getItem("@app:userId"));
        setSetups(usersetups);
        usersetups.length !== 0 ? setSetupOptions(usersetups.map((setup) => (setup.name))) : setSetupOptions(["No data", "No data"]) ;
        setTipoOptions(await aux1);
      } catch(err) {
        console.log("Erro no get");
        console.log(err);
        throw new Error((err as Error).message);
      }
    }
    get();

    if (
        (tipo === '' ||
          ticker === '' ||
          cotas === '') &&
        bool
    ) {
        setError('Por Favor, preencha todos os campos');
    } else {
        setError('');
        setBool(false);
    }
  }, [tipo, ticker, cotas, bool]);

  const handleCreate = async () => {
    if (
      (tipo === '' ||
        ticker === '' ||
        cotas === '')
      ) {
        setError('Por Favor, preencha todos os campos');
        setBool(true);
      } else {   
        setError('');
        setBool(false);
        console.log("setups", setups);
        try{
          if(isReal){
            const realwallet = await UserService.getUsersRealWallet(await AsyncStorage.getItem("@app:userId"));
            await console.log("Real", realwallet);
            const data = {
              segment: tipo,
              asset: ticker,
              value: null,
              realWalletid: realwallet.id,
              quota: Number(cotas),
              setupId: setups.length !== 0 ? setups.find((u) => (
                u.name === setup
              )).id : '1',
            }
            console.log(data);
            await UserService.CreateInvestment(
              data);
            navigation.navigate("Carteira_Real");
          } else {
            console.log("Study:");
            const studywallet = await UserService.getUsersStudyWallet(await AsyncStorage.getItem("@app:userId"));
            await console.log("Study", studywallet);
            const data = {
              segment: tipo,
              asset: ticker,
              value: null,
              studyWalletid: studywallet.id,
              quota: Number(cotas),
              setupId: setups.length !== 0 ? setups.find((u) => (
                u.name === setup
              )).id : '1',
            }
            console.log(data);
            await UserService.CreateInvestment(
              data);
            navigation.navigate("Carteira_de_Estudos");

          }   
        } catch(err) {
          console.log(err as Error);
          throw new Error((err as Error).message);
        }
      }
    };

    const handleTipoSelect = (tipo: string) => {
      setTipo(tipo);
    };

  return(
  <S.Wrapper>
    <StatusBar style="light" />
    <Header text={'Novo Investimento'} height={'60px'} width={'100%'} func={null} isOpen={false} temSidebar={false}/>
    <S.Avoid behavior="position">

    <S.InputsDiv>
      <Dropdown
        value={''}
        text='Tipo de Aplicação'
        placeholder='Selecione o tipo do investimento'
        options={tipoOptions}
        onOptionSelect={handleTipoSelect}
        z={100}
        />
      <CreateInvestInputs  password={false} mode="input" text='Ticker' height='60px' boxtext='Digite aqui...' func={setTicker} value={''}/>
      <CreateInvestInputs password={false} mode="input" text='Quantidade de Cotas' height='60px' boxtext='Digite aqui...' func={setCotas} value={''}/>
      <Dropdown
          text='Setup dos Indicadores'
          placeholder='Selecionar Setups'
          options={setupOptions}
          onOptionSelect={setSetup}
          z={98} value={''}  />
    </S.InputsDiv>
    {error && <S.StyledText>{error}</S.StyledText>}
    <S.Box>
    <CreateInvestButton height='60px' color='#1c0f13' width='80%' text='A D I C I O N A R' func={() => {
      handleCreate();
    }}/>
    </S.Box>
    </S.Avoid>
  </S.Wrapper>
  );
};

export default CreateInvest;
