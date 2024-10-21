import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from '@components/Header';

const Como_Usar = () => {

  return(
    <S.Wrapper>
    <StatusBar style="light" />
    <Header text={"Como Usar"} height={'60px'} width={'100%'} func={null} isOpen={false} temSidebar={false}/>
    <S.InputsDiv>
        <S.StyledText>{'\u2B24'} O aplicativo funciona a partir de uma lista de indicadores que são configurados pelo usuario</S.StyledText>
        <S.StyledText>{'\u2B24'} Na barra de pesquisa podemos escolher o indicador que será utilizado para montarmos a lista</S.StyledText>
        <S.StyledText>{'\u2B24'} Após selecionarmos o indicardor desejado, configuramos os ranges e as notas para analisarmos os ativos (Exemplo: P/L)</S.StyledText>

    </S.InputsDiv>
  </S.Wrapper>

  );
};

export default Como_Usar;
