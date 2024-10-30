import { Text, TextInput, ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';

interface StyledProps {
    height?: string;
    color?: string;
    width?: string;
};

export const StyledInput = styled(TextInput)`
    width: 90%;
    padding-left: 16px;
    color: #000000;
`;

export const OptionsDiv = styled(ScrollView)<StyledProps>`
  width: 100%;
  background-color: #ebebeb;
  display: flex;
  height: ${({height}) => height};
  flex-direction: column;
`;

export const Option = styled(TouchableOpacity)``;

export const Container = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};;
    margin-top: 32px;
    margin-bottom: 16px;
    border-radius: 32px 32px 0px 0px;
    background-color: ${({color}) => color};
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const InputBox = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};;
    margin-top: 32px;
    border-radius: 32px;
    background-color: ${({color}) => color};
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const StyledText = styled(Text)<{ color?: string }>`
  ${({ theme, color }) => css`
    font-size: 20px;
    font-weight: 400;
    color: ${color || `${theme.colors.black}`};
  `}
`;

export const StyledImage = styled(ImageBackground)`
  margin-top: 4px;
  margin-left: 8px;
  flex: 1;
  width: 26.24px;
  height: 82%;
  gap: 0px;
`;
