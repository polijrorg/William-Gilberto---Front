import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home'
import Cadastro1 from "@screens/Cadastro1";
import Cadastro2 from "@screens/Cadastro2";
import Principal from "@screens/Principal";
import Carteira_Real from "@screens/Carteira_Real";
import CreateInvest from "@screens/CreateInvest";
import Carteira_de_Estudos from "@screens/Carteira_de_Estudos";
import Estratégia_Real from "@screens/Estratégia_Real";
import Estratégia_Ideal from "@screens/Estratégia_Ideal";
import EditInvest from "@screens/EditInvest";
import Setup_Indicadores from "@screens/Setup_Indicadores";
import CreateSetup from "@screens/CreateSetup";
import Como_Usar from "@screens/Como_Usar";
import CreateAporte from "@screens/CreateAporte";
import Sugestão from "@screens/Sugestão";

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>

        <AppStack.Screen name='Home'
         component={Home}
        options={{ header: () => <></> }}/>

        <AppStack.Screen name='Sugestao'
         component={Sugestão}
        options={{ header: () => <></> }}/>


        <AppStack.Screen name='Setup_Indicadores'
         component={Setup_Indicadores}
        options={{ header: () => <></> }}/>

        <AppStack.Screen name='CreateAporte'
         component={CreateAporte}
        options={{ header: () => <></> }}/>


        <AppStack.Screen name='Como_Usar'
         component={Como_Usar}
        options={{ header: () => <></> }}/>        


        <AppStack.Screen name='CreateSetup'
         component={CreateSetup}
        options={{ header: () => <></> }}/>

        <AppStack.Screen name='CreateInvest'
         component={CreateInvest}
        options={{ header: () => <></> }}/>


        <AppStack.Screen name='EditInvest'
         component={EditInvest}
        options={{ header: () => <></> }}/>

        <AppStack.Screen name='Estratégia_Real'
         component={Estratégia_Real}
        options={{ header: () => <></> }}/>

        <AppStack.Screen name='Estratégia_Ideal'
         component={Estratégia_Ideal}
        options={{ header: () => <></> }}/>

        <AppStack.Screen name='Carteira_Real'
         component={Carteira_Real}
        options={{ header: () => <></> }}/>

        <AppStack.Screen name='Carteira_de_Estudos'
         component={Carteira_de_Estudos}
        options={{ header: () => <></> }}/>

        <AppStack.Screen name='Cadastro2'
        component={Cadastro2}
        options={{ header: () => <></> }}/>


        <AppStack.Screen name='Principal'
         component={Principal}
        options={{ header: () => <></> }}/>

        <AppStack.Screen name='Cadastro1'
         component={Cadastro1}
        options={{ header: () => <></> }}/>

    </AppStack.Navigator>
);

export default AppRoutes;