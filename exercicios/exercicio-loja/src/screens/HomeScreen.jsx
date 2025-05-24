import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, IconButton } from "react-native-paper";

export default function HomeScreen({navigation, route}) {

    const [categorias, setCategorias] = useState ([])


    useEffect (() => {
        axios.get ("https://dummyjson.com/products/category-list")
        .then((resposta ) => {
            console.log(resposta.data)
            setCategorias (resposta.data)
        } )
        .catch ((erro) => {
            console.log(erro)
        })
    }, [])


  return (
    <View>
      <FlatList 
      data={categorias}
      renderItem={({ item }) => (

        <Card 
        style={{margin: 8}}
        onPress={() => navigation.navigate("ListaProdutosScreen", item)}
        >
            <Card.Title 
            title={item}

            right={() => <IconButton icon="chevron-right" size={20} />}
            />
        </Card>

      )}
      
      
      />
    </View>
  );
}

const styles = StyleSheet.create({});
