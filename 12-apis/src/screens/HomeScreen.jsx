import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Text, Avatar,IconButton  } from "react-native-paper";
import axios from "axios";

export default function HomeScreen( {navigation, route}) {
  const [usuarios, setUsuarios] = useState([]);

  //Fazer algo quando o usuário entrar na tela (Componente for montado)
  useEffect(() => {
    //Tudo que eu quero fazer quando o usuário entrar na Tela
    // vai aqui Dentro.................
    /* alert("Componente Montado") */
    //Fazer uma requisição para buscar a lista de usuarios

    axios
      .get("https://dummyjson.com/user")
      .then((resposta) => {
        console.log(resposta.data.users);
        setUsuarios(resposta.data.users);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
      style={{marginBottom: 45}}
        data={usuarios}
        renderItem={({ item }) => (
          <Card 
          style={{margin: 8}}
          onPress={() => navigation.navigate('UsuarioScreen',item.id)}
          >
            
            <Card.Title
              title={item.firstName + "" + item.lastName}
              subtitle={item.email}
              left={(props) => <Avatar.Image {...props}source={{uri: item.image}} />}
              right={() => < IconButton icon="chevron-right" size={20}/>}
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
