/* eslint-disable react/prop-types */
import * as S from './styles';
import LoginInputs from '@components/LoginInputs';
import ButtonComponent from "@components/ButtonComponent";
import BolaNumero from "@components/BolaNumero";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';

const Cadastro1 = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [CPF, setCPF] = useState('');
  const [error, setError] = useState('');
  const [bool, setBool] = useState(false);
  const parametros = {nome, email, CPF};

  useEffect(() => {
    if (
        (email === '' ||
            CPF === '' ||
            nome === '') &&
        bool
    ) {
        setError('Por Favor, preencha todos os campos');
    } else {
        setError('');
        setBool(false);
    }
  }, [email, CPF, nome, bool]);

  const handleCadastro1 = async () => {
    if (
      (email === '' ||
          CPF === '' ||
          nome === '')
      ) {
        setError('Por Favor, preencha todos os campos');
        setBool(true);
      } else {   
        setError('');
        setBool(false);
        navigation.navigate("Cadastro2", parametros);
      }
    };

  return(
  <S.Wrapper>
    <StatusBar style="light" />
    <BolaNumero num='1' width='48px' height='48px'/>
    <S.InputsDiv>
      <LoginInputs password={false} text='Nome:' height='60px' func={setNome}/>
      <LoginInputs password={false} text='Email:' height='60px' func={setEmail}/>
      <LoginInputs password={false} text='CPF:' height='60px'func={setCPF}/>
    </S.InputsDiv>
    {error && <S.StyledText>{error}</S.StyledText>}
    <ButtonComponent height='60px' color='#ffa800' width='36%' text='text' image='public/assets/images/Vector.png' func={() => {
        handleCadastro1();
      }}/>
  </S.Wrapper>
  );
};

export default Cadastro1;
