import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {

function alerta(){
  alert("Mais um Gol do Real Madrid!!")
}
  return (
    <ScrollView>
    <View style={styles.container}>
      {/*<StatusBar style="auto" />*/}
      <Text style={{fontSize: 50, fontStyle: 'italic'}}>Real Madrid!!</Text>
      <Text>Títulos da La Liga: 35  </Text>
      <Text>Liga Dos Campeões:  14 títulos da Liga dos Campeões </Text>
      <Text>Fundação do Time : 6 de março de 1902</Text>
      <Text>Apelido: Os Blancos (ou Los Blancos), O Maior Clube do Mundo</Text>
      
      <Button title='Enviar' onPress={alerta}></Button>


      <Image
        source={require('./Imagens/download.png')}
        style={{
          height: 300,
          width:300,
          marginBottom: 20 
        }}
      />

<Image
        source={require('./Imagens/download.jpeg')}
        style={{
          height: 300,
          width:300,
          marginBottom: 20
        }}
      />

<Image
        source={require('./Imagens/gettyimages-2155639368-594x594.jpg')}
        style={{
          height: 300,
          width:300,
          marginBottom: 20
        }}
      />

<Image
        source={require('./Imagens/Real Madrid Build World Best Squad.jpg.webp')}
        style={{
          height: 300,
          width:300,
          marginBottom: 20
        }}
      />

<Image
        source={require('./Imagens/Real Madrid Decade Dominance.jpg.webp')}
        style={{
          height: 300,
          width:300,
          marginBottom: 20
        }}
      />

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
