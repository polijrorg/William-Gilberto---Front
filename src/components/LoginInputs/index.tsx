import * as S from './styles';
import React from 'react';

type InputProps = {
    color?: string;
    password: boolean;
    text: string;
    height: string;
    func: (string) => void;
};

const LoginInputs: React.FC<InputProps> = ({ password, text, height, func }) => {    
    return(
    <S.Container height={height}>
        <S.StyledText color='#ffa800'>{text}</S.StyledText>
        <S.StyledInput secureTextEntry={password} onChangeText={value => {
            func(value);
            }}></S.StyledInput>
    </S.Container>
    );
};

export default LoginInputs;