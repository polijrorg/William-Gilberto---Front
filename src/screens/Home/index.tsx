/* eslint-disable react/prop-types */
import * as S from './styles';
import LoginInputs from '@components/LoginInputs';
import ButtonComponent from "@components/ButtonComponent";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import UserService from '@services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '@services/api';
//import AsyncStorage from '@react-native-async-storage/async-storage';

interface ILoginRequest {
  email: string;
  password: string;
}

const Home = ({navigation}) => {  
  const Login = async (data: ILoginRequest) => {
    try {
        const response = await UserService.login(data);
        console.log("login: ")
        console.log(response);
        api.defaults.headers.common = {
            Authorization: `Bearer ${response.token}`
        };
        await AsyncStorage.setItem('@app:token', response.token);
        await AsyncStorage.setItem('@app:userId', response.user.id);
    } catch (err) {
        throw new Error((err as Error).message);
    }
};

  const login = async () => {
    try {
        await Login({email: email, password: senha});
        navigation.navigate("Principal");
    } catch (err) {
        console.log(email, senha);
        console.log("Login error: ")
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
    console.log(await UserService.Teste());
    console.log("Login attempt with credentials:", { email, senha });  // Log email and password

    try {
        if (email === '' || senha === '') {
            setBool(true);
        } else {
            setBool(false);
            await login();  // Await login call to handle async properly
        }
    } catch(err) {
        console.log("Error in handleLogin:", err);
        setBool(true);
    }
  }


  return(
    <S.Wrapper>
    <StatusBar style="light" />
    <S.Avoid behavior="position">
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
    <S.styledView>
    <ButtonComponent height='60px' width='80%' color='#ffa800' text='A V A N Ç A R' func={() => {handleLogin()}}/>
    </S.styledView>
    </S.Avoid>
  </S.Wrapper>
  );
};

export default Home;
