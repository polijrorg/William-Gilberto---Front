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

const EstrategiaRealComponent: React.FC<CardProps> = ({ height, width, segment, color}) => {
    return(
        <S.Container height={height} width={width}>
            <S.HorizontalDiv height="32px" width="100%" paddingtop = {"16px"}>
                <S.HorizontalDiv height="32px" width="30%">
                    <S.Bola color={color} diameter={'10px'}/>
                    <S.StyledText>{segment.name}</S.StyledText>
                </S.HorizontalDiv>
                <S.StyledText>{segment.value}%</S.StyledText>
            </S.HorizontalDiv>
            <S.Line></S.Line>
        </S.Container>
    );
};

export default EstrategiaRealComponent;