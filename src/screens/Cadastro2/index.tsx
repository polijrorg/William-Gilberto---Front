/* eslint-disable react/prop-types */
import * as S from './styles';
import LoginInputs from '@components/LoginInputs';
import ButtonComponent from "@components/ButtonComponent";
import BolaNumero from '@components/BolaNumero';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import UserService from '@services/UserService';

const Cadastro2 = ({navigation, route}) => {
  const [senha, setSenha] = useState('');
  const [confirme, setConfirme] = useState('');
  const {nome,email,CPF} = route.params;

  const [error, setError] = useState('');
  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (
        (senha === '' ||
            confirme === '') &&
        bool
    ) {
        setError('Por Favor, preencha todos os campos');
    } else {
        setError('');
        setBool(false);
    }
  }, [confirme, senha, bool]);

  const cadastro = async () => {
    if (
      (senha === '' ||
          confirme === '')
      ) {
        setError('Por Favor, preencha todos os campos');
        setBool(true);
      } else {   
        try {
          await UserService.cadastro({name: nome,email,cpf: CPF, password: senha, confirmpassword: confirme});
          setSenha('');
          setConfirme(''); 
          setError('');
          setBool(false);
          navigation.navigate("Home");
          console.log("sssssss");
        } catch {
          setError('Por Favor, preencha todos os campos');
          console.log(nome,email,CPF,senha,confirme);
          console.log("aaaaaa");
          setBool(true);
        }
      }
  }

  return(
    <S.Wrapper>
    <StatusBar style="light" />
    <BolaNumero num='2' width='48px' height='48px'/>
    <S.InputsDiv>
      <LoginInputs password={true} text='Senha:' height='60px' func={setSenha}/>
      <LoginInputs password={true} text='Confirme a Senha:' height='60px' func={setConfirme}/>
    </S.InputsDiv>
    {error && <S.StyledText>{error}</S.StyledText>}
    <ButtonComponent height='60px' color='#ffa800' width='36%' text='text' image='public/assets/images/Vector.png' func={() => {
      cadastro();
    }}/>
  </S.Wrapper>
  );
};

export default Cadastro2;
