import { Text, ImageBackground, View } from 'react-native';
import styled, { css } from 'styled-components/native';

interface StyledProps {
    height: string;
    width: string;
};

export const Container = styled(View)<StyledProps>`
    display: flex;
    height: ${({height}) => height};
    width: ${({width}) => width};
    margin-top: 32px;
    border-radius: ${({height}) => height}/2;
    background-color: #ffa800;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;

export const StyledText = styled(Text)<{ color?: string }>`
  ${({ theme, color }) => css`
    font-size: 32px;
    font-weight: 600;
    filter: drop-shadow(red 0rem 1rem 10px);
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
