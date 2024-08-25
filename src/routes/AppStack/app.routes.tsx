import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home'
import Cadastro1 from "@screens/Cadastro1";
import Cadastro2 from "@screens/Cadastro2";
import Principal from "@screens/Principal";

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name='Home'
         component={Home}
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