import * as S from './styles';
import React from 'react';
import Investments from '@interfaces/Investment';

type CardProps = {
    color?: string;
    text?: string;
    height: string;
    width: string;
    invest: Investments;
};

const SugestãoComponent: React.FC<CardProps> = ({ height, width, invest, color}) => {
    return(
        <S.Container height={height} width={width}>
            <S.HorizontalDiv height="32px" width="100%" paddingtop = {"16px"}>
                <S.HorizontalDiv height="32px" width="30%">
                    <S.Bola color={color} diameter={'10px'}/>
                    <S.StyledText color={"#ebebeb"}>{invest.asset}</S.StyledText>
                </S.HorizontalDiv>
                <S.HorizontalDiv height="32px" width="50%">
                    <S.StyledText color={"#9c6504"}>Cotas: {invest.value}</S.StyledText>
                    <S.Button height={"32px"}>
                        <S.StyledText color={"#ebebeb"}>Confirmar</S.StyledText>
                    </S.Button>
                </S.HorizontalDiv>
            </S.HorizontalDiv>
            <S.Line></S.Line>
        </S.Container>
    );
};

export default SugestãoComponent;