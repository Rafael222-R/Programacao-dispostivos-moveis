
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Pessoas(props) {
    
    const {dados} = props



  return (
    <View style={styles.container}>


      <Text style={styles.texto}>Jogador</Text>
      <Text>Nome: {dados.nome}</Text>
      <Text>idade: {dados.idade}</Text>
      <Image 
        source={{ uri: dados.Imagem}}
        style={{
            height:200,
            width:200
        }}
      
      
      />



    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
        borderWidth: 10,
        padding: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    
    },

    texto: {
        fontSize: 10,
        fontWeight:600
    }
})