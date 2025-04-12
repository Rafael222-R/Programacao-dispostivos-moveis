import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import {Text, Card, Title, Paragraph} from "react-native-paper"




export default function EscudoScreen(props) {

    const {nome, escudo } = props
    

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text  variant='headlineLarge' style={{ textAlign: "center"}}>Escudo do Time </Text>
<Card>
    <Card.Title title={nome} />
    <Card.Cover 
    source={{ uri: {escudo}}}
    />
    
</Card>


    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "fff", 
        flex: 1,
        alignItems: "center",
        paddingTop: 10,
    }
})