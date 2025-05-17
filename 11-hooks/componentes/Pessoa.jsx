import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Card, Text, Button} from "react-native-paper"

export default function Pessoa() {

    const [pessoa, setPessoa] = useState({})


    function revelar() {
        const novaPessoa = {
            nome:"Lucas",
            idade: "29",
            imagem: "https://i.pinimg.com/736x/78/4c/3f/784c3f6fbc3ae7b5deb6afcfefa75afd.jpg"
        }
        setPessoa(novaPessoa)
        
    }

    function revelar2() {
        const novaPessoa = {
            nome:"Depay",
            idade: "29",
            imagem: "https://i.pinimg.com/736x/52/8a/b6/528ab6d0097c94511a398180752c5673.jpg"
        }
        setPessoa(novaPessoa)
        
    }


  return (
    <View>
      <Card>
        <Card.Content>
            <Text variant='displaySmall'>Componente Pessoa</Text>
            <Text variant='displaySmall'>Nome:{pessoa.nome} </Text>
            <Text variant='displaySmall'>Idade: {pessoa.idade}</Text>
            <Card.Cover source={{uri: pessoa.imagem }} />

        </Card.Content>

        <Card.Actions>
            <Button onPress={revelar}> Revelar </Button>
            <Button onPress={revelar2}> Revelar2 </Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})