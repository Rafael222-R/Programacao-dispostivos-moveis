import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function JavaScriptComponente() {
  const nome = "Rafael";
  const idade = 15;

  function CheckMaiorIdade() {
    if (idade >= 18) {
      return "Maior de Idade";
    } else {
      return "Menor de Idade ";
    }
  }
  function alerta() {
    alert("Clicou no botão !!");
  }

  return (
    <View>
      <Text>Dados Pessoais</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade + 40: {idade + 40}</Text>
      <Text> É Maior de Idade?: {CheckMaiorIdade()}</Text>
      <Text>Check 18+: {idade >= 18 ? "18+" : "18-" }</Text>
      <Button title="Clicar" onPress={alerta}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
