import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

const Crear = () => {
    const [sexo, setSexo] = React.useState('hombre');
    const [nombre, setNombre] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [edad, setEdad] = React.useState(null);

  return (
    <View style={style.contenedorPrincipal}>
        <View style={style.titulo}>
            <Text style={{color:'#ffffff', fontSize:20, marginLeft: '5%'}}>Crear nueva persona</Text>
        </View>


        <View style={style.inputs}>

            <Text>Nombre</Text>
            <TextInput
                    style={style.input}
                    onChange={setNombre}
                    value={nombre}
            />
            <Text>Apellido</Text>
            <TextInput
                    style={style.input}
                    onChange={setApellido}
                    value={apellido}
            />
            <Text>Edad</Text>
            <TextInput
                    style={style.input}
                    onChange={setEdad}
                    value={edad}
                    keyboardType="numeric"
            />
            <Text>Sexo</Text>
            <Text>Hombre</Text>
                <RadioButton
                    value="Hombre"
                    status={ sexo === 'hombre' ? 'checked' : 'unchecked' }
                    onPress={() => setSexo('hombre')}
                />
            <Text>Mujer</Text>
                <RadioButton
                    value="Mujer"
                    status={ sexo === 'mujer' ? 'checked' : 'unchecked' }
                    onPress={() => setSexo('mujer')}
                />
            
            <TouchableOpacity
                style={style.crear}>
                <Text>Crear</Text>
            </TouchableOpacity>

        </View>
        
        
    </View>
  )
}

const style = StyleSheet.create({
    contenedorPrincipal:{
        alignItems: 'center',
        width: '100%',
        height: 600,
        marginTop: '10%',
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
        height: 80,
        width: '90%',
        borderWidth: 1,
        justifyContent: 'center',
        marginTop: '5%',
        backgroundColor: '#7c6a55',
        borderRadius: 10
    },
    input:{
        borderWidth: 1,
        width: 250,
        height: 40,
        borderRadius: 30,
        padding: 10,
        margin: 5
    },
    inputs:{
        padding: 30,
        margin: 10,
        borderWidth: 1,
        borderRadius: 50
    },
    crear: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        backgroundColor: '#5a5ac1'
    }
})

export default Crear