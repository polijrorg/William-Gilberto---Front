import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface StyledProps {
    height: string;
    color?: string;
    width: string;
    margintop?: string;
};

export const Touch = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
`;

export const Container = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};;
    background-color: ${({color}) => color};
    align-items: normal;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 12px;
`;

export const VerticalDiv = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};;
    background-color: ${({color}) => color};
    align-items: normal;
    justify-content: space-around;
    flex-direction: column;
    padding-top: 0px;
`;

export const TextBola = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};;
    border-radius: 32px;
    background-color: ${({color}) => color};
    align-items: center;
    justify-content: normal;
    flex-direction: row;
    padding-left: 20px;
`;

export const Bola = styled(View)<{diameter: string, color: string}>`
    height: ${({diameter}) => diameter};
    width: ${({diameter}) => diameter};;
    background-color: ${({color}) => color};
    border-radius: 6px;
    margin-top: 12px;
`;

export const GraphDiv = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};;
    margin-top: 0px;
    border-radius: 32px;
    background-color: ${({color}) => color};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-top: 0;
`;

export const Line = styled(View)`
  width: 90%;
  height: 1px;
  background-color: #ebebeb;
  margin-top: 10px;
  margin-left: 5%;
`;

export const StyledText = styled(Text)<{ color?: string, size: string }>`
  font-size: ${({size}) => size};
  margin-top: ${({margintop}) => margintop};
  ${({ theme, color }) => css`
    font-weight: 400;
    color: ${color || `${theme.colors.black}`};
  `}
`;

export const StyledImage = styled(ImageBackground)`
  margin-top: 8px;
  flex: 1;
  width: 70%;
  height: 82%;
  gap: 0px;
`;
