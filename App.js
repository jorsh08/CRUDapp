import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VentanaPrincipal from './Vistas/VentanaPrincipal';
import Crear from './Vistas/Crear'
import Lista from './Vistas/Lista';
import Modificar from './Vistas/Modificar';
import Eliminar from './Vistas/Eliminar';
import ModificarPersona from './Vistas/ModificarPersona';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CRUDapp" component={VentanaPrincipal} />
        <Stack.Screen name="Crear" component={Crear}/>
        <Stack.Screen name="Lista" component={Lista}/>
        <Stack.Screen name="Modificar" component={Modificar}/>
        <Stack.Screen name="Eliminar" component={Eliminar}/>
        <Stack.Screen name='ModificarPersona' component={ModificarPersona}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App