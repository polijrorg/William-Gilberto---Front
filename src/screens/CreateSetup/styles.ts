import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

interface prop{
  margem: string;
}

export const Wrapper = styled(View)`
  display: flex;
  align-items: normal;
  justify-content: normal;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 40px;
  background-color: #1c0f13;
`;

export const Logo = styled(Image)`
  background-color: transparent;
  height: 7.5%;
  width: 14%;
  margin-bottom: 0px;
`;

export const Margin = styled(View)<prop>`
  padding-left: ${({margem}) => margem};
  width: 100%;
`;

export const Avoid = styled(KeyboardAvoidingView)`
  width: 360px;
  height: 640px;
`;

export const Box = styled(View)`
  margin-left: 15%;
`;

export const StyledText = styled(Text)`
  color: #ebebeb;
  width: 80%;
  font-size: 20px;
  margin-top: 0px;
  margin-left: 10%;
  text-align: center;
`;


export const TextDivs = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  width: 80%;
`;