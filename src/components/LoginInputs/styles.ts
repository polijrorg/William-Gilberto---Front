import { Text, View, TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface StyledProps {
    height: string;
};

export const Container = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: 100%;
    margin-left: 80px;
    align-items: normal;
    justify-content: normal;
    flex-direction: column;
`;

export const StyledText = styled(Text)<{ color?: string }>`
    margin-left: 8px;
  ${({ theme, color }) => css`
    font-size: 20px;
    font-weight: 200;
    color: ${color || `${theme.colors.black}`};
  `}
`;

export const StyledInput = styled(TextInput)`
    margin-top: 8px;
    width: 80%;
    height: 80%;
    border-radius: 4px;
    background-color: #ebebeb;
`;