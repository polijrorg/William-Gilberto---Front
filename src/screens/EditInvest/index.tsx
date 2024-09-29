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

const EditInvest = ({navigation, route}) => {
  const {asset, segment, quota, id} = route.params;
  const Id = String(id);

  const [tipoOptions, setTipoOptions] = useState<string[] | null>(null)
  const [tipo, setTipo] = useState<string | null>(segment);
  
  const [ticker, setTicker] = useState(asset);
  const [cotas, setCotas] = useState(quota as unknown as string);

  const [indOptions, setIndOptions] = useState<string[] | null>(null)
  const [ind, setInd] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [bool, setBool] = useState(false);

  const [setupOptions, setSetupOptions] = useState<string[] | null>(null)
  const [setup, setSetup] = useState<string | null>(null);
  const [setups, setSetups] = useState<Setup[]>([]);

  useEffect(() => {
    console.log(route.params);
    const get = async () => {
      try {
        // const userid = await AsyncStorage.getItem("@app:userId");
        const aux1 = UserService.getAllSegmentsNames();
        const usersetups = await UserService.getAllUserSetups(await AsyncStorage.getItem("@app:userId"));
        setSetups(usersetups);
        setSetupOptions(usersetups.map((setup) => (setup.name)));
        const aux2 = ['Liquidez', 'PV/PA', 'Fluxo de caixa'];
        setTipoOptions(await aux1);
        setIndOptions(aux2);
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
          cotas === '' ||
          ind === '') &&
        bool
    ) {
        setError('Por Favor, preencha todos os campos');
    } else {
        setError('');
        setBool(false);
    }
  }, [tipo, ticker, cotas, ind, bool]);

  const handleEdit = async () => {
    if (
      (tipo === '' ||
        ticker === '' ||
        cotas === '' ||
        ind === '')
      ) {
        setError('Por Favor, preencha todos os campos');
        setBool(true);
      } else {   
        setError('');
        setBool(false);
        try{
          console.log("ID:",Id);
          console.log("SETUPS::", setups)
          const data = {
            value: 123,
            quota: Number(cotas),
            setupId: setups.find((u) => (
              u.name === setup
            )).id,
          }            
          console.log("Setup",setups);
          console.log("id", typeof(id));
          await UserService.UpdateInvestment(
            id,
            data);

          (await UserService.GetInvestmentById(Id)).realWalletid !== null ? navigation.navigate("Carteira_Real") : navigation.navigate("Carteira_de_Estudos");
        } catch(err) {
          console.log("Erro no edit", err?.response?.data || err.message);
          throw new Error((err as Error).message);
        }
      }
    };

    const handleTipoSelect = (tipo: string) => {
      setTipo(tipo);
    };

    const handleIndSelect = (ind: string) => {
      setInd(ind);
    };

  return(
  <S.Wrapper>
    <StatusBar style="light" />
    <S.Avoid behavior='position'>
    <Header text={'Editar'} height={'60px'} width={'100%'} func={null} isOpen={false} temSidebar={false}/>
    <S.InputsDiv>
      <Dropdown
        value={segment}
        text='Tipo de Aplicação'
        placeholder='Selecione o tipo do investimento'
        options={tipoOptions}
        onOptionSelect={handleTipoSelect}
        z={100}
        />
      <CreateInvestInputs password={false} mode="input" text='Ticker' height='60px' boxtext='Digite aqui...' value={asset} func={setTicker}/>
      <CreateInvestInputs password={false} mode="input" text='Quantidade de Cotas' height='60px' boxtext='Digite aqui...' value={String(quota)} func={setCotas}/>
      <Dropdown
        value={''}
        text='Setup dos Indicadores'
        placeholder='Selecionar Indicadores'
        options={indOptions}
        onOptionSelect={handleIndSelect}
        z={99}
        />
      <Dropdown
          text='Setups'
          placeholder='Selecionar Setups'
          options={setupOptions}
          onOptionSelect={setSetup}
          z={98} value={setup}  />
    </S.InputsDiv>
    {error && <S.StyledText>{error}</S.StyledText>}
    <S.Box>
    <CreateInvestButton height='60px' color='#1c0f13' width='60%' text='S A L V A R' func={() => {
      handleEdit();
    }}/>
    </S.Box>
      </S.Avoid>
  </S.Wrapper>
  );
};

export default EditInvest;
