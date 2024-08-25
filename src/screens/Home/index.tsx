/* eslint-disable react/prop-types */
import * as S from './styles';
import LoginInputs from '@components/LoginInputs';
import ButtonComponent from "@components/ButtonComponent";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from '@hooks/useAuth';

const Home = ({navigation}) => {
  const {Login} = useAuth();
  
  const login = async () => {
    try {
        Login({email: email, password: senha});
        navigation.navigate("Principal");
    } catch (err) {
        console.log(err);
        throw new Error((err as Error).message);
    }
};

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [bool, setBool] = useState(false);

  useEffect(() => {
    const jaLogado = async () => {
      // const token = await AsyncStorage.getItem('@app:token');
      /*if(token !== null ){
        navigation.navigate("Principal");
      }*/
    }

    jaLogado();

    if (
        (email === '' ||
            senha === '') &&
        bool
    ) {
        setError('Por Favor, preencha todos os campos');
    } else {
        setError('');
        setBool(false);
    }
}, [email, senha, bool]);
   
  const handleLogin = async () => {
    console.log(bool);  
    try {
        if (email === '' ||
          senha === '') {
            setBool(true);
          } else {
            setBool(false);
            console.log(email, senha);
            
            login();
            
            console.log("foi");
          }
      } catch(err) {
        console.log(err);
        setBool(true);
      }
  }

  return(
    <S.Wrapper>
    <StatusBar style="light" />
    <S.Logo
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      source={require('public/assets/images/Logo.png')}
    />
    <S.InputsDiv>
      <LoginInputs password={false} text='Email' height='60px' func={setEmail}/>
      <LoginInputs password={true} text='Senha' height='60px' func={setSenha}/>
    </S.InputsDiv>
    {error ? <S.StyledText>{error}</S.StyledText> : null}
    <S.TextDivs>
      <S.StyledText onPress={() => navigation.navigate("Cadastro1")}>Cadastre-se</S.StyledText>
      <S.StyledText>Esqueceu a senha?</S.StyledText>
    </S.TextDivs>
    <ButtonComponent height='60px' width='80%' color='#ffa800' text='A v a n ç a r' func={() => {handleLogin()}}/>
  </S.Wrapper>
  );
};

export default Home;
