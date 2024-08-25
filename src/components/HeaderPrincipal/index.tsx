/* eslint-disable @typescript-eslint/no-require-imports */
import * as S from './styles';
import React from 'react';

type ButtonProps = {
    text1: string;
    text2: string
    height: string;
    width: string;
};


const HeaderPrincipal: React.FC<ButtonProps> = ({ text1, text2, width, height }) => {
    return (
        <S.Header width={width} height={height}>
            <S.StyledImage height="24px" width = "38.2px" source={require('public/assets/images/Component 20.png')}/>
            <S.HeaderTexts>
                <S.StyledText color="#ebebeb" height="20px">{text1}</S.StyledText>
                <S.StyledText color="#ffa800" height="14px">{text2}</S.StyledText>
            </S.HeaderTexts>
            <S.StyledImage height="90%" width = "11.525%" source={require('public/assets/images/Logo.png')}/>
        </S.Header>
    );
};

export default HeaderPrincipal;