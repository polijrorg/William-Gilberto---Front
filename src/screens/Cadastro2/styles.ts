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
  background-color: transparent;
  height: 7.5%;
  width: 14%;
  margin-bottom: 0px;
`;

export const StyledText = styled(Text)`
  color: #ebebeb;
  margin-top: 32px;
`;

export const Avoid = styled(KeyboardAvoidingView)`
  width: 360px;
  height: 640px;
`;

export const styledView = styled(View)`
  margin-left: 30%;
  width: 400px;
`;

export const InputsDiv = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 250px;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 182.4px;
`;

export const TextDivs = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  width: 80%;
`;