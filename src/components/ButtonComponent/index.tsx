import * as S from './styles';
import React from 'react';

type ButtonProps = {
    color?: string;
    image?: string;
    text?: string;
    height: string;
    width: string;
};


const ButtonComponent: React.FC<ButtonProps> = ({ color, text, width, height, image }) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const imageSource = image ? require('public/assets/images/Vector.png') : null;

    return (
        <S.Container height={height} width={width} color={color}>
            {imageSource ? (
                <S.StyledImage
                    source={imageSource}
                >
                </S.StyledImage>
            ) : (
                <S.Container height={height} color={color} width='80%'>
                    <S.StyledText color='#ebebeb'>{text}</S.StyledText>
                </S.Container>
            )}
        </S.Container>
    );
};

export default ButtonComponent;