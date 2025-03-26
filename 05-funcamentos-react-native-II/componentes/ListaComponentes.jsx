import { _View, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponentes() {

  const lista = ["Uva", "Maça", "Banana", "Laranja"]


  return (
    <View style={styles.container}> 

      {lista.map((fruta) => <Text style={styles.texto}>{fruta}</Text>)}

      {lista.map(
        (fruta) => {
          return (
            
          <View style={styles.conteinerAmarelo}>
            <Text style={styles.texto}> {fruta}</Text>
          </View>
          
        )

        }

      )}


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"

  },

  texto: {
    fontSize: 20,
    fontWeight: 600
  },
  conteinerAmarelo:{
    backgroundColor: "yellow"
  }
})