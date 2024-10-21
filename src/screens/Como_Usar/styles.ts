import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  display: flex;
  align-items: normal;
  justify-content: normal;
  flex-direction: column;
  padding-top: 80px;
  height: 100%;
  width: 100%;
  background-color: #1c0f13;
`;

export const StyledText = styled(Text)`
  color: #ebebeb;
  margin-top: 32px;
  text-align: justify;
`;

export const styledView = styled(View)`
  margin-left: 30%;
  width: 400px;
`;

export const InputsDiv = styled(View)`
  display: flex;
  align-items: normal;
  justify-content: space-between;
  flex-direction: column;
  height: 220px;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;

export const TextDivs = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  width: 80%;
`;