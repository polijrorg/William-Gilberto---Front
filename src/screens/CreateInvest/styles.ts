import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  display: flex;
  align-items: center;
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

export const Avoid = styled(KeyboardAvoidingView)`
  width: 360px;
  height: 640px;
`;

export const Box = styled(View)`
  margin-left: 15%;
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
  height: 70%;
  width: 100%;
  margin-top: 56px;
  margin-bottom: 40px;
`;

export const TextDivs = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  width: 80%;
`;