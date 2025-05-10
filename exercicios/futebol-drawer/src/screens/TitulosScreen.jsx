import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import {Text, Card, Title, Paragraph} from "react-native-paper";
import React from 'react'


export default function TitulosScreen() {

  const titulos = [
    {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020],
    imagem: "https://i.pinimg.com/736x/b5/b3/44/b5b34499853b7af8a8938c41923445a5.jpg"
    },
    {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022],
    imagem: "https://i.pinimg.com/736x/c4/46/5a/c4465a2fa2c0b30dd6d4022aa856ca72.jpg"
    },
    {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024],
    imagem: "https://i.pinimg.com/736x/7f/ac/86/7fac86fe971c2af3481bc7a2460202c4.jpg"
    },
    {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025],
    imagem: "https://i.pinimg.com/736x/7f/ac/86/7fac86fe971c2af3481bc7a2460202c4.jpg"
    },
    ];

  return (

    <ScrollView>
    <View style={styles.container}>

      <Text variant="displaySmall" >Lista de Titulos</Text>

      <FlatList 
      data={titulos}
      renderItem={({item}) => 


      <Card style={styles.card}>
        <Card.Cover style={styles.cardImagem} source={{uri: item.imagem} }/>
        <Card.Content style={styles.cardContent}>
          <Title> {item.nome} </Title>
          <Paragraph> Conquistas: {item.anos.join(', ')}</Paragraph>
        </Card.Content>


      </Card>
      
}
      />
      
      
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "fff",
    flex: 1 ,
    padding: 10,
    textAlign: "center",
    justifyContent: 'center'
  },
  card : {
    marginBottom: 10,
    
  },
  cardImagem: {
    width: 250,
    height: 250,
    alignSelf: "center",
     
  },
  cardContent: {
    
    alignItems: "center",
    justifyContent: "flex-end"
  }

})