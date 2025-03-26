import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image } from "react-native";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import JavaScriptComponente from "./componentes/JavaScriptComponente";
import Perfil from "./componentes/Perfil";
import Pessoas from "./componentes/Pessoas";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
{/*
      <PrimeiroComponente />
      <JavaScriptComponente />

      <Perfil
        nome="Rafael123"
        idade={22}
        email="rafael@gmail.com"
        telefone="61999999999"
      />

      <Perfil
        nome="Erica"
        idade={26}
        email="erica@gmail.com"
        telefone="61999999999"
        
      />  */}

<Pessoas
dados = {{
  nome:"Neymar",
  idade:33,
  Imagem: "https://i.pinimg.com/736x/22/6b/ec/226beca8f934576f5cd3c3f8f35da693.jpg"


}}
/>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
