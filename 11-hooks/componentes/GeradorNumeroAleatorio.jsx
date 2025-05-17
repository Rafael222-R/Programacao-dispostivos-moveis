import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Card, Text, Button } from "react-native-paper";

export default function GeradorNumeroAleatorio() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [jogoGerado, setJogoGerado] = useState ([])
  const [numeroAleatorio2, setNumeroAleatorio2] = useState(0);
  const [numeroAleatorio3, setNumeroAleatorio3] = useState(0);
  const [numeroAleatorio4, setNumeroAleatorio4] = useState(0);
  const [numeroAleatorio5, setNumeroAleatorio5] = useState(0);
  const [numeroAleatorio6, setNumeroAleatorio6] = useState(0);
  const [lista, setLista] = useState([])

  function gerar() {

    const jogo = []
    console.log(jogo)
   
    const numero = Math.floor(Math.random() * 60) + 1;
    jogo.push(numero)
    const numero2 = Math.floor(Math.random() * 60) + 1;
    jogo.push(numero2)
    const numero3 = Math.floor(Math.random() * 60) + 1;
    jogo.push(numero3)
    const numero4 = Math.floor(Math.random() * 60) + 1;
    jogo.push(numero4)
    const numero5 = Math.floor(Math.random() * 60) + 1;
    jogo.push(numero5)
    const numero6 = Math.floor(Math.random() * 60) + 1;
    jogo.push(numero6)

    
    console.log(jogo)
    setJogoGerado(jogo)

    const conjunto = new Set(jogo)
    
    console.log(conjunto.size)

   
   
  }
  
  

  
    
  

  function resetar() {
    setNumeroAleatorio(0)
    setLista([])
    
  }
  return (
    <View>
      <Card>
        <Card.Content>
          <Text variant="displaySmall">Gerador de Numeros</Text>
          <Text variant="displaySmall">{jogoGerado.join(" , ")}</Text>
        
        </Card.Content>
        <Card.Actions>
          <Button onPress={gerar}>Gerar </Button>
          <Button onPress={resetar}>Resetar</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Content>
            <Text variant="displaySmall">Historico</Text>
            {lista.map(numero => <Text variant="labelLarge">{numero}</Text>)}


        </Card.Content>
       
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
