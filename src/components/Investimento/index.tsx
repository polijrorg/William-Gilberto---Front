/* eslint-disable @typescript-eslint/no-require-imports */
import * as S from './styles';
import React from 'react';
import Investments from '@interfaces/Investment';
import UserService from '@services/UserService';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type CardProps = {
    color?: string;
    text?: string;
    height: string;
    width: string;
    invest: Investments;
    reloader: boolean;
    setReloader: (boolean: boolean) => void;
};



// Define your stack parameters (if not already defined)
type RootStackParamList = {
    EditInvest: {asset: string, quota: number, segment: string};
  };
  
  // Define a specific type for the navigation prop
  type SideBarNavigationProp = StackNavigationProp<RootStackParamList, 'EditInvest'>;
    
const Investimento: React.FC<CardProps> = ({ color, height, width, invest, reloader, setReloader }) => {
    const params = {segment: invest.segment, quota: invest.quota, asset: invest.asset, id: invest.id};
    const navigation = useNavigation<SideBarNavigationProp>();
    return (
        <S.VerticalDiv>
            <S.Container height={height} width={width}>
                <S.Bola color={color} diameter={"12px"}></S.Bola>
                <S.Destaque color={color}>
                    <S.StyledText color={color} size='16px' margintop={"8px"}>{invest.segment}</S.StyledText>
                    <S.StyledText color={"#ebebeb"} size='16px' margintop={"8px"}> - {invest.asset}</S.StyledText>
                </S.Destaque>
                <S.VerticalDiv>
                    <S.StyledText color='#ebebeb' size='16px'>{invest.value} R$</S.StyledText>
                    <S.StyledText color='#ebebeb' size='16px'>Cotas - {invest.quota}</S.StyledText>
                </S.VerticalDiv>
                <S.VerticalDiv>
                    <S.Touch onPress={async () => {
                        console.log("Editar");
                        navigation.navigate("EditInvest", params);
                    }}><S.StyledImage source={require("public/assets/images/Editar.png")}/></S.Touch>
                    <S.Touch onPress={async () => {
                        console.log(invest);
                        try{
                            await UserService.DeleteInvestment(invest.id);
                            setReloader(!reloader);
                        } catch(err) {
                            console.log(err);
                            throw new Error((err as Error).message);  
                        }
                        }}><S.StyledImage source={require("public/assets/images/X.png")}/></S.Touch>
                </S.VerticalDiv>
            </S.Container>
            <S.Line></S.Line>
        </S.VerticalDiv>
    );
};

export default Investimento;