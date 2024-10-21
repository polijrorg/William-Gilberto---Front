/* eslint-disable @typescript-eslint/no-require-imports */
import * as S from './styles';
import React from 'react';
import Setup from '@interfaces/Setup';

type CardProps = {
    color?: string;
    text?: string;
    height: string;
    width: string;
    setup: Setup;
    warning: boolean;
    reloader: boolean;
    setReloader: (b: boolean) => void; 
};

const SetupComponent: React.FC<CardProps> = ({ height, width, setup, warning, reloader, setReloader}) => {
    return(
        <S.Container height={height} width={width}>
            <S.HorizontalDiv height="100%" width="100%" paddingtop = {"0px"}>
                <S.HorizontalDiv height="100%" width="30%" paddingtop = {"8px"}>
                    <S.StyledText color="#ebebeb">{setup.name}</S.StyledText>
                    <S.StyledText color="gray"> | date</S.StyledText>
                </S.HorizontalDiv>
                <S.HorizontalDiv height="100%" width="40%">
                    {warning === true ? <S.StyledImage source={require("public/assets/images/warning.png")}/> : null}
                    <S.Touch onPress={() => {
                        setReloader(!reloader);
                    }}>
                        <S.StyledText color="#ebebeb">Editar</S.StyledText>
                    </S.Touch>
                </S.HorizontalDiv>
            </S.HorizontalDiv>
            <S.Line></S.Line>
        </S.Container>
    );
};

export default SetupComponent;