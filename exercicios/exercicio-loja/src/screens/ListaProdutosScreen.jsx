import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-native-paper";

export default function ListaProdutosScreen({ navigation, route }) {
  console.log("RECEBENDO CATEGORIA:" + route.params);

  const lista = route.params;
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/" + lista)
      .then((resposta) => {
        console.log(resposta.data.products);
        setListaProdutos(resposta.data.products);
      })
      .catch((erro) => {
        console.log(erro);
      });
  },[]);

  return (
    <ScrollView>
    <View>
      {listaProdutos.map(produtos => (
        <Card 
        style={{margin: 8}}
        onPress={() => navigation.navigate("ProdutoScreen", {id:produtos.id})}
        >
          <Card.Title 
          title={produtos.title}
         /*  subtitle={produtos.id} */
          />
          <Card.Cover source={{uri: produtos.thumbnail}}/>
        </Card>
      ))}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
