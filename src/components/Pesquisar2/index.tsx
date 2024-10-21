/* eslint-disable @typescript-eslint/no-require-imports */
import * as S from './styles';
import React, { useEffect, useState } from 'react';

type SearchProps = {
    color?: string;
    image?: string;
    text?: string;
    height: string;
    width: string;
    setups: string[];
    func: (txt: string) => void;
    values: string;
};


const Pesquisar2: React.FC<SearchProps> = ({ color, text, width, setups, func }) => {
    const [value, setValue] = useState("");
    const [bool, setBool] = useState("");

    useEffect(() => {
        func(value);
    }, [value]);

    return (
        <S.Container height={(value!='')&&(value!=bool) ? "200px" : "0px"} width={width}>
            <S.InputBox height="32px" width={"100%"} color={color}>
                <S.StyledInput placeholderTextColor= "#000000" value={value} secureTextEntry={false} placeholder={text} onChangeText={(v) => {setValue(v);console.log(v);}}></S.StyledInput>
                <S.StyledImage source={require("public/assets/images/lupa_preta.png")}/>
            </S.InputBox>
            <S.OptionsDiv height={'180px'}>
                {(value != '') ?
                    setups.map((option,index) => (
                        option.toLocaleUpperCase().includes(value.toLocaleUpperCase())&&option.toLocaleUpperCase()!=value.toLocaleUpperCase() ?
                        <S.Option key={index} onPress={async () => 
                            {setValue(option);
                            setBool(option);
                            console.log(bool)}}
                            ><S.StyledText color="#000000">{option}</S.StyledText></S.Option>
                        : null
                    ))
                    : null}
            </S.OptionsDiv>

        </S.Container>
    );
};

export default Pesquisar2;