import * as S from './styles';
import React, { useEffect, useState } from 'react';
import { VictoryPie } from "victory-native";

type CardProps = {
    color?: string;
    text?: string;
    height: string;
    width: string;
};

interface ValueResponse {
    nome: string;
    numero: number;
    color: string;
}

const CardPrincipal: React.FC<CardProps> = ({ color, text, width, height }) => {

    const [data, setData] = useState<ValueResponse[]>([]);

    useEffect(() => {
        setData(
            [{nome: 'Ações',numero: 8, color: 'blue'},
                {nome: 'Fundos Imobiliários',numero: 7, color: 'yellow'},
                {nome: 'Renda Fixa',numero: 2, color: 'green'},
                {nome: 'Criptomoeda',numero: 3, color: 'lime'},
                {nome: 'Criptomoeda',numero: 4, color: 'purple'}
            ]
        );
    }, []);

    return (
        <S.Container height={height} width={width} color={color}>
            <S.StyledText color='#ebebeb' size='32px'>{text}</S.StyledText>
            <S.Line></S.Line>
            <S.GraphDiv height="77%" width="100%">
                <VictoryPie
                    data={
                    data && Array.isArray(data)
                    ? data.map((dado) => ({
                        x: '',
                        y: dado.numero,
                        color: dado.color,
                    }))
                        : []
                    }
                    colorScale={
                        data && Array.isArray(data)
                        ? data.map((dado) => (
                            dado.color
                        ))
                        : []
                    }
                    padding={{ top: 60, bottom: 60, right: 0, left: 70 }}
                    width={240}
                    radius={80}
                    innerRadius={60}
                    labels={() => null} 
                    />
                    <S.TextDiv height='100%' width='60%'>
                        { data && Array.isArray(data)
                            ? data.map((dado, index) => (
                                <S.TextBola key={index} height="auto" width="100%">
                                    <S.Bola diameter='12px' color={dado.color}/>
                                    <S.StyledText size='16px' color='#ebebeb'>{dado.nome}</S.StyledText>
                                </S.TextBola>
                            ))
                            : []
                        }
                    </S.TextDiv>
            </S.GraphDiv>    
        </S.Container>
    );
};

export default CardPrincipal;