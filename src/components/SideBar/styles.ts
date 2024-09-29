import { Text, Image, View, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface StyledProps {
    width?: string;
    height?: string;
    isOpen?: boolean;
};

export const Touch = styled(TouchableOpacity)``;

export const Container = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};
    margin-top: 0px;
    border-radius: 0px;
    background-color: #1c0f13;
    align-items: normal;
    justify-content: normal;
    flex-direction: column;
    padding-left: 16px;
    padding-top: 16px;
    ${({ isOpen }) => css`
            opacity: ${isOpen ? 1 : 0};
    `}
`;

export const OptionsDiv = styled(View)`
    display: flex;
    height: 60%;
    width: 100%;
    margin-top: 0px;
    border-radius: 0px;
    background-color: #1c0f13;
    align-items: center;
    justify-content: normal;
    flex-direction: column;
    padding-top: 16px;
`;

export const IconText = styled(TouchableOpacity)<StyledProps>`
    display: flex;
    height: 10%;
    width: ${({width}) => width};;
    border-radius: 32px;
    align-items: normal;
    justify-content: normal;
    flex-direction: row;
`;

export const StyledText = styled(Text)<{ color?: string, size: string }>`
  margin-left: 16px;
  height: 100%;
  font-size: ${({size}) => size};
  ${({ theme, color }) => css`
    font-weight: 200;
    color: ${color || `${theme.colors.black}`};
  `}
`;

export const StyledImage = styled(Image)<StyledProps>`
  /* height: ${({heigth})=>heigth};
  width: ${({width})=>width}; */
  margin-top: 8px;
`;
