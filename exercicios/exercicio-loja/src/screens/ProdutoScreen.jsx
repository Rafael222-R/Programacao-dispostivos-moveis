import { StyleSheet, View, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card,Text } from 'react-native-paper'

export default function ProdutoScreen({navigation, route}) {
console.log("RECEBIMENDO O ID DO PRODUTO: " + route.params.id)

const idProduto = route.params.id
const [detalhes, setDetalhes] = useState ([])

useEffect (() => {
axios.get("https://dummyjson.com/products/" + idProduto)
.then((resposta)=> {
  console.log(resposta.data)
  setDetalhes(resposta.data)
})
.catch((erro) => {
  console.log(erro)
})
},[])



  return (
   <View>
    <Card>
      <Card.Title 
      title={detalhes.title}
      />
    <Card.Content>
       <Card.Cover source={{uri: detalhes.thumbnail}}/>
      <Text>{detalhes.description}</Text>
     
    </Card.Content>

    </Card>
   </View>
  
    
  
  
  )
}

const styles = StyleSheet.create({})