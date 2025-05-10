import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import {Text, Card, Title, Paragraph} from "react-native-paper"

const time = [{
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  }];


export default function EscudoScreen() {

    
    

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text  variant='displaySmall' > Escudo do Time </Text>
<Card>
    <Card.Content>
      <Text> Flamento</Text>
      
      </Card.Content>    
      <Card.Cover style={styles.cardImagem} source={{uri: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg"}}/>
</Card>


    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "fff", 
        flex: 1,
        paddingTop: 10,
    },
    cardImagem: {
      width: 250,
      height: 250,
      alignSelf: "center",
       
    }
})