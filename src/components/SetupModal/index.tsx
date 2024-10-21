import { StackNavigationProp } from '@react-navigation/stack';
import * as S from './styles';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

interface Props {
    visible: boolean;
    setVisible: (b: boolean) => void;
}

// Define your stack parameters (if not already defined)
type RootStackParamList = {
    Carteira_Real: {name: string};
    Carteira_de_Estudos: undefined;
    Estratégia_Real: undefined;
    Novo_Aporte: undefined;
    CreateSetup: {name: string};
    Estratégia_Ideal: undefined;
    Setup_Indicadores: undefined;
    Ranking: undefined;
    Perfil: undefined;
  };
  
  // Define a specific type for the navigation prop
  type SideBarNavigationProp = StackNavigationProp<RootStackParamList, 'Carteira_Real'>;

const SetupModal: React.FC<Props> = ({visible, setVisible}) => {
    const navigation = useNavigation<SideBarNavigationProp>();

    const [name, setName] = useState("");
    const params = { name };

    return(
        <S.Wrapper visible={visible} transparent={true} animationType={"fade"} onRequestClose={() => setVisible(false)}>
        <S.ModalContainer>
        <S.Container  width="240px" height="140px">
            <S.StyledText color="#ffa800">Insira o nome do novo setup</S.StyledText>
            <S.StyledInput value={name} onChangeText={setName}/>
            <S.Touch onPress={() => {
                if(name !== ""){
                    navigation.navigate("CreateSetup", params);
                    setVisible(false);
                }
            }}>
                <S.StyledText color="#ebebeb">CONTINUAR</S.StyledText>
            </S.Touch>
        </S.Container>
        </S.ModalContainer>
        </S.Wrapper>
    );
};

export default SetupModal;