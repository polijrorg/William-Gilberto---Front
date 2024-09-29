import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: normal;
  flex-direction: column;
  padding-top: 80px;
  height: 100%;
  width: 100%;
  background-color: #1c0f13;
`;

export const Logo = styled(Image)`
  background-color: aliceblue;
  height: 182px;
  width: 160px;
  margin-bottom: 20px;
  margin-left: 28%;
`;

export const Avoid = styled(KeyboardAvoidingView)`
  width: 360px;
  height: 640px;
`;

export const StyledText = styled(Text)`
  color: #ebebeb;
  margin-top: 32px;
`;

export const InputsDiv = styled(KeyboardAvoidingView)`
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
  margin-left: 11%;
`;

export const styledView = styled(View)`
  margin-left: 6%;
  width: 400px;
`;