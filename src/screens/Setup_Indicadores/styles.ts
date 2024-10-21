import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
  align?: string;
  height?: string;
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
  margin-top: 12px;
  width: 90%;
  border-radius: 16px;
  background-color: #331c23;
  height: ${({height}) => height};
  flex-direction: column;
`;

export const Line = styled(Text)`
  width: 100%;
  height: 1px;
  background-color: #897878;
  margin-top: 8px;
`;

export const Caixa = styled(View)<ContainerProps>`
  margin-top: 0px;
  width: 100%;
  height: ${({height}) => height};
  background-color: #1c0f13;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GraphDiv = styled(View)<ContainerProps>`
  margin-top: 16px;
  width: 100%;
  height: ${({height}) => height};
  background-color: #331c23;
`;

export const Wrapper = styled(View)`

`;

export const StyledText = styled(Text)`
  color: #ebebeb;
  margin-top: 24px;
  font-size: 28px;
  
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