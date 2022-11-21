import { View, Text, ScrollView,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

const Modificar = ({ navigation }) => {
  const [lista, setLista] = React.useState([])

  async function getLista(){
    const res = await fetch('http://177.229.128.9:8000/Persona/')
    const data = await res.json()
    setLista(data)
  }

  async function modificarPersona(idPersona, nombre, apellido, edad, sexo){

    const parametros = {
      id: idPersona,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      sexo: sexo
    }

    navigation.navigate('ModificarPersona', parametros)
  }

  useEffect(()=>{
    getLista()
  })

  return (
    <View>
      <ScrollView>
        {lista.map(persona => (
          <View key={persona.id} style={[styles.contenedorLista, {flexDirection: 'row'}]}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.subtitulo}>Nombre</Text>
              <Text style={styles.parametro}>{persona.nombre}</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.subtitulo}>Apellido</Text>
              <Text style={styles.parametro}>{persona.apellido}</Text>

            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.subtitulo}>Edad</Text>
              <Text style={styles.parametro}>{persona.edad}</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.subtitulo}>Sexo</Text>
              <Text style={styles.parametro}>{persona.sexo}</Text>
              <TouchableOpacity
              style={styles.botonModificar}
              onPress={()=>modificarPersona(persona.id, persona.nombre, persona.apellido, persona.edad, persona.sexo)}>
                <Text>Modificar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorLista: {
    backgroundColor: '#9d6aac',
    width: '100%',
    height: 90,
    marginVertical: 10,
    justifyContent: 'space-between',
    padding: 10
  },
  subtitulo: {
    fontSize: 14,
    color: '#5ffcf1',
    fontWeight: 'bold'
  },
  parametro: {
    fontSize: 12,
    color: '#99faa1',
    fontStyle: 'italic'
  },
  botonModificar:{
    width: 100,
    height: 25,
    backgroundColor: '#5ff2c1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  }
});

export default Modificar