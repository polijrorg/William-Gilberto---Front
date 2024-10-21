import { Text, TouchableOpacity, Modal, TextInput, View } from 'react-native';
import styled from 'styled-components/native';

interface StyledProps {
  height?: string;
  color?: string;
  width?: string;
  margintop?: string;
  paddingtop?: string;
};


export const Touch = styled(TouchableOpacity)`
  background-color: #ffa800;
  border-radius: 4px;
  height: 32px;
  width: 100px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled(Modal)`

`;

export const ModalContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75); /* Semi-transparent background */
`;

export const Container = styled(View)<StyledProps>`
  display: flex;
  height: ${({height}) => height};
  width: ${({width}) => width};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 12px;
  border-radius: 4px;
  background-color: #1c0f13;
`;

export const StyledText = styled(Text)<StyledProps>`
  color: ${({color}) => color};
`;

export const StyledInput = styled(TextInput)`
  background-color: #ebebeb;
  width: 200px;
  height: auto;
  padding-left: 12px;
`;

export const Line = styled(Text)`
  width: 100%;
  height: 1px;
  background-color: #897878;
  margin-top: 16px;
`;