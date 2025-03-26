
import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {

const nome = "Rafael Dias";
const idade = 18

function ChecarMaiorIdade() {
    console.log("chamou a função de Maior idade ")
    if(idade >= 18) {
        return "Maior de Idade "
    }else {
        return "Menor de idade"
    }
}

function alerta() {
    console.log("Chamou a função Alerta")
    alert("clicou no botão !!")
}


  return (

    <View style={styles.container}> 

      <Text>Verificar Maior de de idade</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idadel +40: {idade + 40}</Text>
      <Text>18+: {ChecarMaiorIdade ()}</Text>
      <Button title='Clicar' onPress={alerta}/>
     


    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow'
    }
})