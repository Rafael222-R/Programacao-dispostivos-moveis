import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FilmeComponente(props) {

  const {nome, ano, diretor, tipo, capa} = props
  return (
    <View style={styles.conteiner}>
      <Text style={styles.texto}>Filme</Text>
      
      <Image 
        source={{
          uri: capa
        
        }}
        style={{
          height:300,
          width:300,
        }}
      
      />
      <Text style={styles.texto}> Nome:{nome}</Text>
      <Text style={styles.texto}> Ano:{ano} </Text>
      <Text style={styles.texto}> Diretor:{diretor} </Text>
      <Text style={styles.texto}> Tipo:{tipo} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    backgroundColor: 'yellow',
    borderWidth: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  texto: {
    fontSize: 20,
    fontWeight: 600,
  },


})