import { FlatList, ScrollView } from 'react-native';
import * as S from './styles';
import React from 'react';

type DataItem = {
    id: string;
    resultado: string;
    tipo: string;
    num1?: string;
    num2?: string;
};

type CardProps = {
    data: DataItem[]; 
    setData: (d: DataItem[]) => void;
};

const TableComponent: React.FC<CardProps> = ({ data, setData }) => {
    const width = "760px";

    const updateItem = (id: string, field: keyof DataItem, value: string) => {
        const updatedData = data.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setData(updatedData);
    };

    const linha = ({ item }: { item: DataItem }) => (
        <S.Linha width={width}>
            <S.Celula color={"#1c0f13"} width={"16%"} height={"100%"}>
                <S.StyledText>{item.resultado}</S.StyledText>
            </S.Celula>
            <S.Celula color={"#1c0f13"} width={"14%"} height={"100%"}>
                <S.StyledText>{item.tipo}</S.StyledText>
            </S.Celula>
            <S.Celula color={"#1c0f13"} width={"14%"} height={"100%"}>
                <S.StyledText>{item.tipo === "MAIOR QUE" ? '>' : '<'}</S.StyledText>
            </S.Celula>
            <S.Celula color={"#1c0f13"} width={"14%"} height={"100%"}>
                <S.StyledInput
                    placeholderTextColor="#ebebeb"
                    value={item.num1 || ''}
                    secureTextEntry={false}
                    placeholder={'0'}
                    onChangeText={(v) => updateItem(item.id, 'num1', v)}
                />
            </S.Celula>
            <S.Celula color={"#1c0f13"} width={"14%"} height={"100%"}>
                <S.StyledText>{item.tipo === "INTERVALADO" ? '&' : '-'}</S.StyledText>
            </S.Celula>
            <S.Celula color={"#1c0f13"} width={"14%"} height={"100%"}>
                <S.StyledText>{item.tipo === "INTERVALADO" ? '<' : '-'}</S.StyledText>
            </S.Celula>
            <S.Celula color={"#1c0f13"} width={"14%"} height={"100%"}>
                {item.tipo === "INTERVALADO" ? 
                <S.StyledInput
                    placeholderTextColor="#ebebeb"
                    value={item.num2 || ''}
                    secureTextEntry={false}
                    placeholder={'0'}
                    onChangeText={(v) => updateItem(item.id, 'num2', v)}
                />
                : <S.StyledText>-</S.StyledText>}
            </S.Celula>
        </S.Linha>
    );

    return (
        <ScrollView horizontal>
            <S.Container width={width}>
                <S.HeaderRow width={width}>
                    <S.CelulaHeader width={"16%"} height={"100%"}>
                        <S.StyledText>Resultado</S.StyledText>
                    </S.CelulaHeader>
                    <S.CelulaHeader width={"84%"} height={"100%"}>
                        <S.StyledText>INDICADORES</S.StyledText>
                    </S.CelulaHeader>
                </S.HeaderRow>
                <FlatList 
                    data={data} 
                    renderItem={linha}
                    keyExtractor={(item) => item.id}
                />
            </S.Container>
        </ScrollView>
    );
};

export default TableComponent;
