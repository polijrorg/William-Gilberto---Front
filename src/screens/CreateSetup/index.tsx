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
import { useWindowDimensions } from 'react-native';
import Indicador from '@interfaces/Indicador';

type DataItem = {
  id: string;
  resultado: string;
  tipo: string;
  num1?: string;
  num2?: string;
};

const CreateSetup = ({ navigation, route }) => {
  const { name } = route.params;
  const [search, setSearch] = useState("");
  const [reloader, setReloader] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [indicadores, setIndicadores] = useState<Indicador[]>([]);
  const { width } = useWindowDimensions();
  const [data, setData] = useState<DataItem[]>([]);

  const selecionar = (selecionado: string) => {
    setSearch(selecionado);

    const selectedData: DataItem[] = indicadores
      .filter((ind) => ind.name === selecionado)
      .flatMap((ind) => [
        ind.nota1 && {
          id: `${ind.id}-nota1`,
          resultado: "",
          tipo: ind.nota1.type,
          num1: ind.nota1.number1,
          num2: ind.nota1.number2,
        },
        ind.nota2 && {
          id: `${ind.id}-nota2`,
          resultado: "",
          tipo: ind.nota2.type,
          num1: ind.nota2.number1,
          num2: ind.nota2.number2,
        },
        ind.nota3 && {
          id: `${ind.id}-nota3`,
          resultado: "",
          tipo: ind.nota3.type,
          num1: ind.nota3.number1,
          num2: ind.nota3.number2,
        },
      ].filter(Boolean) as DataItem[]);

    setData(selectedData);
    setReloader(!reloader);
  };

  useFocusEffect(
    useCallback(() => {
      const get = async () => {
        const ind = await UserService.GetAllIndicators();
        setIndicadores(ind);
        setOptions(ind.map((ind) => ind.name));
        console.log("Indicadores:", ind);
      };
      get();
    }, [reloader])
  );

  return (
    <S.Wrapper>
      <StatusBar style="light" />
      <Header
        text={name}
        height={'60px'}
        width={'100%'}
        func={null}
        isOpen={false}
        temSidebar={false}
      />
      <S.Margin margem={"32px"}>
        <Pesquisar2
          height={'40px'}
          width={'90%'}
          color="#ebebeb"
          setups={options}
          text={"Pesquisar seus indicadores ativos"}
          func={selecionar}
          values={''}
        />
      </S.Margin>
      <TableComponent data={data} setData={setData} />
      {width < 500 ? (
        <S.StyledText>
          Para melhor visualização deixe o celular na horizontal
        </S.StyledText>
      ) : null}
      <S.Margin margem={"30%"}>
        <ButtonComponent
          text={"SALVAR"}
          color="#ffa800"
          height={'60px'}
          width={'60%'}
          func={() => {
            navigation.navigate("Setup_Indicadores");
          }}
        />
      </S.Margin>
    </S.Wrapper>
  );
};

export default CreateSetup;
