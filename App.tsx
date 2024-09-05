import React from 'react';
import {ScrollView,StyleSheet} from 'react-native';
//Componentes que se van sumando a mi pantalla principal
import BasicComponents from './src/components/BasicComponents';
import TextComponents from './src/components/TextComponents';
import TextInputComponents from './src/components/TextInputComponents';
import ListNotasComponents from './src/components/ListNotasComponents';
import Home from './src/react-native-elements/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvatarBasic from './src/react-native-elements/AvatarBasic';
import BadgeBasic from './src/react-native-elements/BadgeBasic';
import CardBasic from './src/react-native-elements/CardBasic';
import TabBasic from './src/react-native-elements/TabBasic';
import PropsEjemplo from './src/navegacion/PropsEjemplo';
import AxiosEjemplo from './src/navegacion/AxiosEjemplo';
import AsyncStorageEjemplo from './src/navegacion/AsyncStorageEjemplo';
import Componente01 from './src/simulacro-parcial/Componente01';
import Props02 from './src/simulacro-parcial/Props02';
import Axios03 from './src/simulacro-parcial/Axios03';
import AsyncStorage04 from './src/simulacro-parcial/AsyncStorage04';
const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    //<ScrollView>
      
       <NavigationContainer>
          <Stack.Navigator initialRouteName="Comp1">
          {/* <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notas" component={ListNotasComponents} />
            <Stack.Screen name="Avatar" component={AvatarBasic} />
            <Stack.Screen name="Badge" component={BadgeBasic} />
            <Stack.Screen name="Card" component={CardBasic} />
            <Stack.Screen name="Tab" component={TabBasic} />
            <Stack.Screen name="Props" component={PropsEjemplo} />
            <Stack.Screen name="Axios" component={AxiosEjemplo} />
            <Stack.Screen name="Async" component={AsyncStorageEjemplo} /> */}
            <Stack.Screen name="Comp1" component={Componente01} />
            <Stack.Screen name="Props02" component={Props02} />
            <Stack.Screen name="Axios03" component={Axios03} />
            <Stack.Screen name="AsyncStorage04" component={AsyncStorage04} />
          </Stack.Navigator>
       </NavigationContainer>

       
    //</ScrollView>

  );
}
const styles = StyleSheet.create({
});

export default App;

