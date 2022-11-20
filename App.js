import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VentanaPrincipal from './Vistas/VentanaPrincipal';
import Crear from './Vistas/Crear'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="VentanaPrincipal" component={VentanaPrincipal} />
        <Stack.Screen name="Crear" component={Crear}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App