import { Text, ImageBackground, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface StyledProps {
    height: string;
    color: string;
    width: string;
};

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
`;

export const StyledText = styled(Text)<{ color?: string }>`
  ${({ theme, color }) => css`
    font-size: 20px;
    font-weight: 400;
    color: ${color || `${theme.colors.black}`};
  `}
`;

export const StyledImage = styled(ImageBackground)`
  margin-top: 8px;
  margin-left: 36px;
  flex: 1;
  width: 60%;
  height: 82%;
  gap: 0px;
`;
