import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Avatar, IconButton } from "react-native-paper";

export default function ListaProdutosScreen({ navigation, route }) {
  console.log("RECEBENDO CATEGORIA:" + route.params);

  const lista = route.params;
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/" + lista + "?delay=500")
      .then((resposta) => {
        console.log(resposta.data.products);
        setListaProdutos(resposta.data.products);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <ScrollView>
      <View>
        {listaProdutos.map((produtos) => (
          <Card
           key={produtos.id}
            style={{ margin: 8 }}
            onPress={() =>
              navigation.navigate("ProdutoScreen", { id: produtos.id })
            }
          >
            <Card.Title
              title={produtos.title}
              /*  subtitle={produtos.id} */
              left={(props) => (
                <Avatar.Image {...props} source={{ uri: produtos.thumbnail }} />
              )}
              right={() => <IconButton icon="chevron-right" size={20} />}
            />
            
            
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
