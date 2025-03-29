import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Series(props) {

    const {nome, ano, diretor, temporadas, capa} = props
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Series</Text>
      
      <Image 
            source={{ 
                uri: capa
            }}   
            style={{
                height:300,
                width:300
            }}   
      
      />
      <Text style={styles.texto}>Nome:{nome} </Text>
      <Text style={styles.texto}>Ano:{ano} </Text>
      <Text style={styles.texto}>Diretor:{diretor} </Text>
      <Text style={styles.texto}>Temporadas:{temporadas} </Text>
      


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
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