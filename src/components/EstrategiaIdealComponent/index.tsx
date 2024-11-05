/* eslint-disable @typescript-eslint/no-require-imports */
import * as S from './styles';
import React from 'react';
import { Segment } from '@interfaces/RealStrategy';

type CardProps = {
    color?: string;
    text?: string;
    height: string;
    width: string;
    segment: Segment;
};

const EstrategiaIdealComponent: React.FC<CardProps> = ({ height, width, segment, color}) => {
    return(
        <S.Container height={height} width={width}>
            <S.HorizontalDiv height="32px" width="100%" paddingtop = {"0px"}>
                <S.HorizontalDiv height="32px" width="30%" paddingtop = {"16px"}>
                    <S.Bola color={color} diameter={'10px'}/>
                    <S.StyledText>{segment.name}</S.StyledText>
                </S.HorizontalDiv>
                <S.HorizontalDiv height="32px" width="30%" paddingtop = {"8px"}>
                    <S.StyledText paddingtop = {"8px"}>{segment.value}%</S.StyledText>
                    <S.Touch><S.StyledImage paddingtop = {"12px"} source={require("public/assets/images/X.png")}/></S.Touch>
                </S.HorizontalDiv>

            </S.HorizontalDiv>
            <S.Line></S.Line>
        </S.Container>
    );
};

export default EstrategiaIdealComponent;