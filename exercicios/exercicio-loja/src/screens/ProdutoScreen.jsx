import { StyleSheet, View, FlatList,ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Text } from "react-native-paper";

export default function ProdutoScreen({ navigation, route }) {
  console.log("RECEBIMENDO O ID DO PRODUTO: " + route.params.id);

  const idProduto = route.params.id;
  const [detalhes, setDetalhes] = useState([]);
  const [carrousel , setCarrousel] = useState ([])

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + idProduto + "?delay=500")
      .then((resposta) => {
        console.log(resposta.data && resposta.data.images );
        setDetalhes(resposta.data);
       
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <View>
      <Card>
        <Card.Title title={detalhes.title} />
        <Card.Content>
          <Card.Cover source={{ uri: detalhes.thumbnail }} />
          <Text > Descrição : {detalhes.description}</Text>
          <Text>Categoria: {detalhes.category}</Text>
          <Text>Valor: R$ {detalhes.price}</Text>
          <Text>Percentual de desconto :{detalhes.discountPercentage}</Text>
          <Text>{detalhes.rating}</Text>
        </Card.Content>
        
      </Card>
 
      
    </View>
  );
}

const styles = StyleSheet.create({});
