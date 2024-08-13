import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledHeading = styled(Text)<{ color?: string }>`
  ${({ theme, color }) => css`
    font-size: 32px;
    color: ${color || `${theme.colors.black}`};
  `}
`;
