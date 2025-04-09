import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Card, Title, Paragraph } from "react-native-paper";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={{ textAlign: "center" }}>
          Tela de Inicio
        </Text>
        <Card>
          <Card.Content>
            <Title> um Titulo</Title>
            <Paragraph>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              esse ducimus, maiores voluptas voluptatem quibusdam facere! Totam
              facilis blanditiis soluta, perspiciatis, nam quia fugit architecto
              iure nisi ducimus tempora dicta? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Doloribus quam ducimus voluptas?
              Exercitationem, facere, labore, quia aliquam quasi nisi voluptatum
              deleniti eos maiores earum enim veritatis et? Incidunt, sequi
              voluptatem.
            </Paragraph>
          </Card.Content>
          <Card.Cover
            source={{
              uri: "https://acm-itea.org/wp-content/uploads/2021/03/entender-o-universo.jpg",
            }}
          />
        </Card>

        <Card>
          <Card.Content>
            <Title> um Titulo</Title>
            <Paragraph>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              esse ducimus, maiores voluptas voluptatem quibusdam facere! Totam
              facilis blanditiis soluta, perspiciatis, nam quia fugit architecto
              iure nisi ducimus tempora dicta? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Doloribus quam ducimus voluptas?
              Exercitationem, facere, labore, quia aliquam quasi nisi voluptatum
              deleniti eos maiores earum enim veritatis et? Incidunt, sequi
              voluptatem.
            </Paragraph>
          </Card.Content>
          <Card.Cover
            source={{
              uri: "https://acm-itea.org/wp-content/uploads/2021/03/entender-o-universo.jpg",
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "fff",
    flex: 1,
    alignItems: "center",
    /* justifyContent: 'center' */
    paddingTop: 10,
  },
});
