import { Text, View } from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
  align: string;
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

export const Wrapper = styled(View)`

`;

export const StyledText = styled(Text)`
  color: #ebebeb;
  margin-top: 32px;
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