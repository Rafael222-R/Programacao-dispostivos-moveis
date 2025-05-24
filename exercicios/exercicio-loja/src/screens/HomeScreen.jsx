import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, IconButton, ActivityIndicator, MD2Colors  } from "react-native-paper";

export default function HomeScreen({navigation, route}) {

    const [categorias, setCategorias] = useState ([])
    const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};


    useEffect (() => {
        axios.get ("https://dummyjson.com/products/category-list?delay=2000")
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
        style={{margin: 8, }}
        onPress={() => navigation.navigate("ListaProdutosScreen", item)}
        >
            <Card.Title 
            
           title={capitalizeFirstLetter(item)}
            

            right={() => <IconButton icon="chevron-right" size={20} />}
            />
        </Card>

      )}

      ListEmptyComponent={() => (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator animating={true} color={MD2Colors.red800} />
                  <Text> Carregando ....</Text>
                </View>
              )}
      
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
 loadingContainer: {
    height: 750,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
