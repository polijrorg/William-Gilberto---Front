import * as S from './styles';
import React from 'react';

type InputProps = {
    color?: string;
    password: boolean;
    text: string;
    height: string;
};

const LoginInputs: React.FC<InputProps> = ({ password, text, height }) => (
    <S.Container height={height}>
        <S.StyledText color='#ffa800'>{text}</S.StyledText>
        <S.StyledInput secureTextEntry={password}></S.StyledInput>
    </S.Container>
);

export default LoginInputs;