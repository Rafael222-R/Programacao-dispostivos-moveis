import React from "react";
import {StatusBar} from "expo-status-bar"
import { StyleSheet, Text, View } from 'react-native';

import NomeNumero from './componentes/NomeNumero';
import Controle from "./componentes/Controle";
import Pessoa from "./componentes/Pessoa";
import GeradorNumeroAleatorio from "./componentes/GeradorNumeroAleatorio"

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      {/* <NomeNumero/>
      <Controle /> */}
      <Pessoa />
      <GeradorNumeroAleatorio />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
