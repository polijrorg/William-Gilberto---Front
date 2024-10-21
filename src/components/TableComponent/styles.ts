import { Text,TextInput, View } from 'react-native';
import styled from 'styled-components/native';

interface StyledProps {
    height?: string;
    color?: string;
    width?: string;
}


export const Celula = styled(View)<StyledProps>`
  width: ${({width}) => width || '100%'};
  height: 60px;
  background-color: ${({color}) => color || 'transparent'};
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border: solid;
  border-color: #ebebeb;
  border-width: 0.5px;
`;

export const CelulaHeader = styled(View)<StyledProps>`
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height || '40px'};
  background-color: ${({color}) => color || 'transparent'};
  align-items: center;
  justify-content: center;
  border: solid;
  border-color: #ebebeb;
  border-width: 0.5px;
`;

export const Container = styled(View)<StyledProps>`
  height: 240px;
  width: ${({width}) => width || '100%'};
  border-radius: 12px;
  border: 0.5px solid aliceblue;
  margin-top: 64px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const StyledText = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: #ebebeb;
`;

export const StyledInput = styled(TextInput)`
  height: 80%;
  width: 80%s;
  font-size: 16px;
  font-weight: 400;
  color: #ebebeb;
`;

export const Linha = styled(View)<StyledProps>`
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height || 'auto'};
  flex-direction: row;
  align-items: center;
`;

export const HeaderRow = styled(View)<StyledProps>`
  width: ${({width}) => width || '100%'};
  height: 50px;
  border-radius: 12px 12px 0px 0px;
  background-color: #ffa800;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
