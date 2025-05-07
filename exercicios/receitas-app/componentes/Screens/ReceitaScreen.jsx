import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Button } from 'react-native-paper'
import { FlatList } from 'react-native'


export default function ReceitaScreen({navigation, route}) {

    console.log ("RECEITA RECEBIDA =>", route.params.item)

    const receita = route.params.item
  return (
    <View>
      <Card>
        <Card.Cover source={{uri: receita.imagem}}/>
        <Card.Content>
            <Text>Nome: {receita.nome}</Text>
            <Text>Tempo de Preparo : {receita.tempoPreparo}</Text>
            <Text>Porção: {receita.porcoes}</Text>
         <Card.Actions> 
            <FlatList 
            data={receita.ingredientes}
            renderItem={({item}) => (
                <Text></Text>
            )}
            />
         </Card.Actions>
           <Button
                         mode="contained"
                         icon="arrow-right"
                         onPress={() => navigation.goBack()}
                       >
                         Voltar
                       </Button>
           
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})