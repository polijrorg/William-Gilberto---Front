import { Text, TouchableOpacity, View, Image } from 'react-native';
import styled, { css } from 'styled-components/native';

interface StyledProps {
    height?: string;
    color?: string;
    width?: string;
};

export const Header = styled(View)<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  height: ${({height}) => height};
  width: ${({width}) => width};
`;

export const StyledImage = styled(Image)<StyledProps>`
  height: ${({height}) => height};
  width: ${({width}) => width};
`;

export const HeaderTexts = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  height: 100%;
`;

export const Container = styled(TouchableOpacity)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};;
    margin-top: 32px;
    border-radius: 32px;
    background-color: ${({color}) => color};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    // Sombra: (não está funcionando) 
    /* shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    text-shadow-radius: 1px;
    elevation: 2; */
`;

export const StyledText = styled(Text)<StyledProps>`
  font-size: ${({height}) => height};
  ${({ theme, color }) => css`
    font-weight: 400;
    color: ${color || `${theme.colors.black}`};
  `}
`;
