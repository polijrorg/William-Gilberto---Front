import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface StyledProps {
    height: string;
};

export const Button = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    margin-top: 8px;
    color: #ebebeb;
    width: 80%;
    height: 80%;
    border-radius: 16px;
    border-width: 1px;
    padding-left: 16px;
    border-color: #ebebeb;
    background-color: #1c0f13;
`;

export const ButtonText = styled(Text)`
    width: 100%;
    color: #ebebeb;
`;

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
    font-size: 24px;
    font-weight: 400;
    color: ${color || `${theme.colors.black}`};
  `}
`;

export const StyledInput = styled(TextInput)`
    margin-top: 8px;
    color: #ebebeb;
    width: 80%;
    height: 80%;
    border-radius: 16px;
    border-width: 1px;
    padding-left: 16px;
    border-color: #ebebeb;
    background-color: #1c0f13;
`;