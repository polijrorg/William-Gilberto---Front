import styled from 'styled-components/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';

interface Props{
  isOpen?: boolean;
  z?: number;
}

export const styledText = styled(Text)`
    margin-left: 8px;
    font-size: 24px;
    font-weight: 400;
    color: #ffa800;
`;

export const Container = styled(TouchableOpacity)`
    margin-top: 8px;
    color: #ebebeb;
    width: 80%;
    height: 80%;
    border-radius: 16px;
    border-width: 1px;
    padding-left: 16px;
    border-color: #ebebeb;
    background-color: #1c0f13;
`;

export const SelectedOptionButton = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ChevronDown = styled(Image)<Props>`
  width: 16px;
  height: 16px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')}; //rotate(180deg)
`;

export const SelectedOption = styled(Text)`
  font-size: 16px;
  margin-top: 12px;
  color: #ebebeb;
`;

export const OptionsContainer = styled(View)`
  margin-top: 8px;
  border-top-width: 1px;
  border-top-color: #331C23;
`;

export const Option = styled(Text)`
  padding: 8px;
  font-size: 16px;
  color: #ebebeb;
  background-color: #331C23;
`;

export const OptionTouchable = styled(TouchableOpacity)`
  background-color: ${({ pressed }) => (pressed ? '#f0f0f0' : 'white')};
`;

export const Div = styled(View)<Props>`
  display: flex;
  width: 100%;
  height: 60px;
  margin-left: 80px;
  z-index: ${({z}) => z};
`;