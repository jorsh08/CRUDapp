import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const VentanaPrincipal = ( {navigation } ) => {
  return (
    <View style={style.contenedorPrincipal}>
        <View style={style.titulo}>
            <Text style={{color:'#ffffff', fontSize:24, marginLeft: '5%'}}>Menu principal</Text>
        </View>
        
        <TouchableOpacity
            style={style.boton}
            onPress={() => navigation.navigate('Lista')}>
                <Text>Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={style.boton}
            onPress={() => navigation.navigate('Crear')}>
                <Text>Crear</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={style.boton}
            onPress={() => navigation.navigate('Modificar')}>
                <Text>Modificar</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={style.boton}
            onPress={() => navigation.navigate('Eliminar')}>
                <Text>Eliminar</Text>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    contenedorPrincipal:{
        alignItems: 'center',
        width: '100%',
        height: '65%',
        marginTop: '30%',
        backgroundColor: '#3fc33a',
        borderWidth: 2,
        borderRadius: 20
    },
    boton:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        width: 250,
        height: 50,
        backgroundColor: '#5c3a11',
        borderRadius: 50,
        borderWidth: 2
    },
    titulo:{
        height: 100,
        width: '90%',
        borderWidth: 1,
        justifyContent: 'center',
        marginTop: '5%',
        backgroundColor: '#7c6a55',
        borderRadius: 10
    }
})

export default VentanaPrincipal