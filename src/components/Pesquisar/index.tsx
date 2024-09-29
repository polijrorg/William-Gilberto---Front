/* eslint-disable @typescript-eslint/no-require-imports */
import * as S from './styles';
import React, { useEffect, useState } from 'react';
import Investments from '@interfaces/Investment';

type SearchProps = {
    color?: string;
    image?: string;
    text?: string;
    height: string;
    width: string;
    invests: Investments[];
    func?: (txt: string) => void;
    value?: string;
};


const Pesquisar: React.FC<SearchProps> = ({ color, text, width, invests, func }) => {
    const [value, setValue] = useState("");
    const [bool, setBool] = useState("");

    useEffect(() => {
        func(value);
    }, [value]);

    return (
        <S.Container height={(value!='')&&(value!=bool) ? "200px" : "0px"} width={width}>
            <S.InputBox height="32px" width={"100%"} color={color}>
                <S.StyledInput placeholderTextColor= "#ebebeb" value={value} secureTextEntry={false} placeholder={text} onChangeText={(v) => {setValue(v);console.log(v);}}></S.StyledInput>
                <S.StyledImage source={require("public/assets/images/search.png")}/>
            </S.InputBox>
            <S.OptionsDiv height={'180px'}>
                {(value != '') ?
                    invests.map((option,index) => (
                        option.asset.toLocaleUpperCase().includes(value.toLocaleUpperCase())&&option.asset.toLocaleUpperCase()!=value.toLocaleUpperCase() ?
                        <S.Option key={index} onPress={async () => 
                            {setValue(option.asset);
                            setBool(option.asset);
                            console.log(bool)}}
                            ><S.StyledText color="#ebebeb">{option.asset}</S.StyledText></S.Option>
                        : null
                    ))
                    : null}
            </S.OptionsDiv>

        </S.Container>
    );
};

export default Pesquisar;