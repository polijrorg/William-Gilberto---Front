import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
  align?: string;
  height?: string;
  width?: string;
  color?: string;
  underline?: boolean;
}

export const Container = styled(View)<ContainerProps>`
  display: flex;
  align-items: ${({align}) => align};
  justify-content: normal;
  flex-direction: column;
  padding-top: 60px;
  height: 100%;
  width: 100%;
  background-color: #1c0f13;
  opacity: 1;
`;

export const InvestDiv = styled(ScrollView)<ContainerProps>`
  display: flex;
  margin-top: 0px;
  width: 100%;
  height: ${({height}) => height};
  flex-direction: column;
`;

export const Caixa = styled(View)<ContainerProps>`
  margin-top: 0px;
  width: 100%;
  height: ${({height}) => height};
  background-color: #1c0f13;
  flex-direction: column;
  align-items: center;
`;

export const GraphDiv = styled(View)<ContainerProps>`
  margin-top: 16px;
  width: 100%;
  height: ${({height}) => height};
  background-color: #331c23;
`;

export const Wrapper = styled(View)`

`;

export const Touch = styled(TouchableOpacity)<ContainerProps>`
  justify-content: center;
`;

export const HorizontalDiv = styled(View)<ContainerProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};;
    background-color: ${({color}) => color};
    align-items: normal;
    justify-content: space-around;
    flex-direction: row;
    padding-top: ${({paddingtop}) => paddingtop};
    padding-left: 12px;
    padding-right: 24px;
`;

export const StyledText = styled(Text)<ContainerProps>`
  color: ${({color}) => color};
  margin-top: 24px;
  font-size: ${({height}) => height};
  text-decoration-line: ${({ underline }) => (underline ? 'underline' : 'none')};
`;

export const InputsDiv = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 100%;
  margin-top: 160px;
`;

export const TextDivs = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  width: 80%;
`;