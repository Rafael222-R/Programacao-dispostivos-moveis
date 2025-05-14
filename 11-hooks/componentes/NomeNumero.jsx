import { View } from "react-native";
import React, { useState } from "react";
import { Card, Text, Button } from "react-native-paper";

export default function NomeNumero() {
  const [nome, setNome] = useState("?????");

  const numero = "???????";

  function mostrarNomeNumero() {
    setNome("Lucas");
    numero = "122";
    console.log(setNome);
    console.log(numero);
  }
   

  return (
    <View>
      <Card>
        <Card.Content>
          <Card.Title title="Componente NomeNumero" />
          <Text variant="displayMedium"> Nome :{nome} </Text>
          <Text variant="displayMedium"> Numero:{numero} </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={mostrarNomeNumero}> Iniciar </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
