import { Text, TouchableOpacity, View, Image } from 'react-native';
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
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-top: ${({paddingtop}) => paddingtop};
    padding-left: 16px;
    padding-right: 16px;
`;

export const Touch = styled(TouchableOpacity)`
  background-color: #1c0f13;
  border-radius: 4px;
  height: 32px;
  width: 60px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  margin-top: 10px;
`;

export const Container = styled(View)<StyledProps>`
  display: flex;
  height: ${({height}) => height};
  width: ${({width}) => width};
  align-items: normal;
  justify-content: center;
  flex-direction: column;
  margin-top: 12px;
`;

export const StyledText = styled(Text)<StyledProps>`
  color: ${({color}) => color};
`;


export const Line = styled(Text)`
  width: 100%;
  height: 1px;
  background-color: #897878;
  margin-top: 16px;
`;