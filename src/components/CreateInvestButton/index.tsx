import * as S from './styles';
import React from 'react';

type ButtonProps = {
    color?: string;
    image?: string;
    text?: string;
    height: string;
    width: string;
    func: () => void;
};


const CreateInvestButton: React.FC<ButtonProps> = ({ color, text, width, height, image, func }) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const imageSource = image ? require('public/assets/images/Vector.png') : null;

    return (
        <S.Container height={height} width={width} color={color} onPress={func}>
            {imageSource ? (
                <S.StyledImage
                    source={imageSource}
                >
                </S.StyledImage>
            ) : (
                <S.StyledText color='#ffa800'>{text}</S.StyledText>
            )}
        </S.Container>
    );
};

export default CreateInvestButton;