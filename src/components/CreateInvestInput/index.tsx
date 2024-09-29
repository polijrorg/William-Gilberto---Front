import * as S from './styles';
import React, { useState } from 'react';

type InputProps = {
    color?: string;
    password: boolean;
    text?: string;
    boxtext?: string;
    height: string;
    mode: string;
    value: string | number;
    func: (string) => void;
};

const CreateInvestInputs: React.FC<InputProps> = ({ password, text, boxtext, value, mode ,height, func }) => {
    const [u, setU] = useState(true);
    return(
    <S.Container height={height}>
        <S.StyledText color='#ffa800'>{text}</S.StyledText>
        {mode === "input" ? 
        <S.StyledInput placeholder={boxtext} placeholderTextColor= "#ebebeb" secureTextEntry={password} value={u ? value : null} onChangeText={value => {
            func(value);
            setU(false);
            }}></S.StyledInput>
        : <S.Button>
            <S.ButtonText>Selecionar Tipo</S.ButtonText>
        </S.Button>}
    </S.Container>
    );
};

export default CreateInvestInputs;