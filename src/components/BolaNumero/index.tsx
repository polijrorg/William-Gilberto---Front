import * as S from './styles';
import React from 'react';

type BolaProps = {
    num: string;
    width: string;
    height: string;
};


const BolaNumero: React.FC<BolaProps> = ({ num, width, height }) => {
    return (
        <S.Container height={height} width={width}>
            <S.StyledText color='#ebebeb'>{num}</S.StyledText>
        </S.Container>
    );
};

export default BolaNumero;