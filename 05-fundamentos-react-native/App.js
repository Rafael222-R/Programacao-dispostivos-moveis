import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from "./componentes/SegundoComponente" 

export default function App() {

  return (

    <View style={styles.container}>
    {/* <StatusBar style="auto" />  Codigo para pegar Toda a tela do celular, 
    se vc ser esquece é so tirar o comentario e ver como ele se comporta */}
    {/* Atalaho para comentario em bloco alt + shift + A */}

    <PrimeiroComponente />
    <SegundoComponente />
  
  


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
