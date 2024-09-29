import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

interface StyledProps {
  height?: string;
  color?: string;
  width?: string;
  margintop?: string;
  paddingtop?: string;
};

export const HorizontalDiv = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};;
    background-color: ${({color}) => color};
    align-items: normal;
    justify-content: space-between;
    flex-direction: row;
    padding-top: ${({paddingtop}) => paddingtop};
    padding-left: 12px;
    padding-right: 12px;
`;

export const Touch = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
`;

export const StyledImage = styled(ImageBackground)`
  margin-top: ${({paddingtop}) => paddingtop};
  flex: 1;
  width: 70%;
  height: 82%;
  gap: 0px;
`;

export const Bola = styled(View)<{diameter: string, color: string}>`
    height: ${({diameter}) => diameter};
    width: ${({diameter}) => diameter};;
    background-color: ${({color}) => color};
    border-radius: 6px;
    margin-right: 16px;
    margin-top: 4px;
`;

export const Container = styled(View)<StyledProps>`
  display: flex;
  height: ${({height}) => height};
  width: ${({width}) => width};
  background-color: #120909;
  align-items: normal;
  justify-content: center;
  flex-direction: column;
  margin-top: 12px;
  margin-left: 16px;
`;

export const StyledText = styled(Text)`
  color: #ebebeb;
  padding-top: ${({paddingtop}) => paddingtop};
  margin-right: 16px;
`;


export const Line = styled(Text)`
  width: 100%;
  height: 1px;
  background-color: #897878;
  margin-top: 16px;
  margin-left: 5%;
`;