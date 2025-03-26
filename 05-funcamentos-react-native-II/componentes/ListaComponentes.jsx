import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponentes() {

    const lista = ["Uva", "Maça", "Banana", "Laranja"]


  return (
    <View>
      
      {lista.map((fruta) => <Text style={styles.texto}>{fruta}</Text>)}

     {lista.map((fruta) =>{

        return (
            <View>
                

            </View>
        )
     })}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",

    },

    texto:{
        fontSize: 20,
        fontWeight: 600
    }
})