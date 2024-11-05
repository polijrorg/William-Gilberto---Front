/* eslint-disable @typescript-eslint/no-require-imports */
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import * as S from './styles';
import React from 'react';

type CardProps = {
    color?: string;
    text?: string;
    height: string;
    width: string;
    func: (b: boolean) => void;
    isOpen: boolean;
};

// Define your stack parameters (if not already defined)
type RootStackParamList = {
    Carteira_Real: undefined;
    Carteira_de_Estudos: undefined;
    Estratégia_Real: undefined;
    CreateAporte: undefined;
    Estratégia_Ideal: undefined;
    Setup_Indicadores: undefined;
    Ranking: undefined;
    Perfil: undefined;
  };
  
  // Define a specific type for the navigation prop
  type SideBarNavigationProp = StackNavigationProp<RootStackParamList, 'Carteira_Real'>;

const SideBar: React.FC<CardProps> = ({ color, width, height, func, isOpen }) => {
    const navigation = useNavigation<SideBarNavigationProp>();

    return (
        <S.Container height={height} width={width} color={color} isOpen={isOpen}>
            <S.Touch onPress={() => func(!isOpen)}>
                <S.StyledImage height="24px" width = "38.2px" source={require('public/assets/images/Component 20.png')}/>
            </S.Touch>
            <S.OptionsDiv>
                <S.IconText width={'100%'} onPress={() => {func(!isOpen);navigation.navigate("Carteira_Real")}}>
                    <S.StyledImage source={require('public/assets/images/carteira.png')}/>
                    <S.StyledText color='#ebebeb' size='24px'>Carteira Real</S.StyledText>   
                </S.IconText>
                <S.IconText width={'100%'} onPress={() => {func(!isOpen);navigation.navigate("Carteira_de_Estudos")}}>
                    <S.StyledImage source={require('public/assets/images/carteira.png')}/>
                    <S.StyledText color='#ebebeb' size='24px'>Carteira Estudos</S.StyledText>   
                </S.IconText>
                <S.IconText width={'100%'} onPress={() => {func(!isOpen);navigation.navigate("CreateAporte")}}>
                    <S.StyledImage source={require('public/assets/images/dinheiro.png')}/>
                    <S.StyledText color='#ebebeb' size='24px'>Novo Aporte</S.StyledText>   
                </S.IconText>
                <S.IconText width={'100%'} onPress={() => {func(!isOpen);navigation.navigate("Estratégia_Real")}}>
                    <S.StyledImage source={require('public/assets/images/grafico.png')}/>
                    <S.StyledText color='#ebebeb' size='24px'>Estratégia Real</S.StyledText>   
                </S.IconText>
                <S.IconText width={'100%'} onPress={() => {func(!isOpen);navigation.navigate("Estratégia_Ideal")}}>
                    <S.StyledImage source={require('public/assets/images/grafico.png')} />
                    <S.StyledText color='#ebebeb' size='24px'>Estratégia Ideal</S.StyledText>   
                </S.IconText>
                <S.IconText width={'100%'} onPress={() => {func(!isOpen);navigation.navigate("Setup_Indicadores")}}>
                    <S.StyledImage source={require('public/assets/images/config.png')}/>
                    <S.StyledText color='#ebebeb' size='24px'>Setup de Indicadores</S.StyledText>   
                </S.IconText>
                <S.IconText width={'100%'}>
                    <S.StyledImage source={require('public/assets/images/ph_ranking.png')}/>
                    <S.StyledText color='#ebebeb' size='24px'>Ranking</S.StyledText>   
                </S.IconText>
                <S.IconText width={'100%'}>
                    <S.StyledImage source={require('public/assets/images/Group.png')}/>
                    <S.StyledText color='#ebebeb' size='24px'>Perfil</S.StyledText>   
                </S.IconText>
            </S.OptionsDiv>
        </S.Container>
    );
};

export default SideBar;