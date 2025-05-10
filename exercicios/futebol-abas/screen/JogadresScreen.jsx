import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import { Text, Card, Paragraph, Title, Button } from "react-native-paper";
import React from "react";

export default function JogadresScreen({ navigation, route }) {
  const jogadores = [
    {
      nome: "Gabriel Barbosa",
      numero: 9,
      imagem:
        "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg",
    },
    {
      nome: "Arrascaeta",
      numero: 14,
      imagem:
        "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg",
    },
    {
      nome: "Everton Ribeiro",
      numero: 7,
      imagem:
        "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg",
    },
    {
      nome: "David Luiz",
      numero: 23,
      imagem:
        "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg",
    },
    {
      nome: "Pedro",
      numero: 21,
      imagem:
        "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant="displaySmall"> Lista de Jogares</Text>

        <FlatList
          data={jogadores}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Cover
                style={styles.cardImagem}
                source={{ uri: item.imagem }}
              />
              <Card.Content style={styles.cardContent}>
                <Title>{item.nome}</Title>
                <Paragraph> Número : {item.numero}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />

      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "fff",
    flex: 1,
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  card: {
    marginBottom: 10,
  },
  cardImagem: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
