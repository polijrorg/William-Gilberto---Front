/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-require-imports */
import { StackNavigationProp } from '@react-navigation/stack';
import * as S from './styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

type ButtonProps = {
    text: string;
    height: string;
    width: string;
    func: (b: boolean) => void;
    isOpen: boolean;
    temSidebar: boolean;
};

// Define your stack parameters (if not already defined)
type RootStackParamList = {
    Principal: undefined; // Add any parameters if required
    // Add other routes here
  };
  
  // Define a specific type for the navigation prop
  type SideBarNavigationProp = StackNavigationProp<RootStackParamList, 'Principal'>;


const HeaderPrincipal: React.FC<ButtonProps> = ({ text, width, height, func, isOpen, temSidebar }) => {
    const navigation = useNavigation<SideBarNavigationProp>();

    return (
        <S.Header width={width} height={height}>
            <S.Touch onPress={() => {temSidebar ? func(!isOpen) : navigation.goBack();}}>
                <S.StyledImage height="24px" width = "38.2px" source={temSidebar ? require('public/assets/images/Component 20.png') : require('public/assets/images/Arrow_Right_MD.png')}/>
            </S.Touch>
            <S.HeaderTexts>
                <S.StyledText color="#ebebeb" height="20px">{text}</S.StyledText>
            </S.HeaderTexts>
            <S.ImagesDiv>
                <S.Touch onPress={() => {navigation.navigate('Principal')}}>
                    <S.StyledImage width="25.21px" height = "24px" source={require('public/assets/images/Casa.png')}/>
                </S.Touch>
                <S.StyledImage width="27.66px" height = "32px" source={require('public/assets/images/Logo.png')}/>
            </S.ImagesDiv>
        </S.Header>
    );
};

export default HeaderPrincipal;