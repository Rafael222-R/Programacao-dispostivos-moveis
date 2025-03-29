import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import JavaScriptComponente from "./componentes/JavaScriptComponente";
import Perfil from "./componentes/Perfil";
import Pessoas from "./componentes/Pessoas";
import ListaComponentes from "./componentes/ListaComponentes";
import Atleta from "./componentes/Atleta";

export default function App() {

const listaJogadores  =[
  {
    nome: "Neymar",
    idade: 33,
    Imagem: "https://i.pinimg.com/236x/e8/96/7f/e8967f2828fd1416e02539871254fb8a.jpg"
  },
  {
    nome: "Cristiano Ronaldo ",
    idade: 40,
    Imagem: "https://i.pinimg.com/474x/7f/4c/a4/7f4ca44807a9fd6db6080638b9498542.jpg"
  },
  {
    nome: "Cristiano Ronaldo",
    idade: 40,
    Imagem: "https://i.pinimg.com/236x/94/23/50/9423501a8c606b4b7efa34d394a3cba6.jpg"
  },
  {
    nome: "Messi",
    idade: 39,
    Imagem: "https://i.pinimg.com/236x/e9/f1/ac/e9f1ac1be3e35d62c72f2118af3da92d.jpg"
  },


]



  return (
    <ScrollView>
          <View style={styles.container}>

      {/* <StatusBar style="auto" /> */}


      

      {/*
      <PrimeiroComponente />
      <JavaScriptComponente />

      ********  Aqui estamos pegando as infmações inseridas aqui diretammente, estamos conseguindo puxar a atraves de PROPS em outra tela de componentes direto no PERFIL ************

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

{/* Mostando como podemos usar lista para moldar a coisa na app */}
{/* <ListaComponentes /> */}



{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* Estamos usando outra forma de pegar informações via PROPS mas aqui ja temos um lista com verios objetos e estamos usando o MAP do java Aqui estamos usando os Componente em Pessoas  */}

{/*
       {<Pessoas
        dados={{
          nome: "Neymar",
          idade: 33,
          Imagem: "https://i.pinimg.com/736x/22/6b/ec/226beca8f934576f5cd3c3f8f35da693.jpg"


        }}
      />}

      <Pessoas
        dados={{
          nome: "Neymar",
          idade: 33,
          Imagem: "https://i.pinimg.com/736x/22/6b/ec/226beca8f934576f5cd3c3f8f35da693.jpg"


        }}
      />
      <Pessoas
        dados={{
          nome: "Neymar",
          idade: 33,
          Imagem: "https://i.pinimg.com/736x/22/6b/ec/226beca8f934576f5cd3c3f8f35da693.jpg"


        }}
      />
      <Pessoas
        dados={{
          nome: "Neymar",
          idade: 33,
          Imagem: "https://i.pinimg.com/736x/22/6b/ec/226beca8f934576f5cd3c3f8f35da693.jpg"


        }}
      />
      <Pessoas
        dados={{
          nome: "Neymar",
          idade: 33,
          Imagem: "https://i.pinimg.com/736x/22/6b/ec/226beca8f934576f5cd3c3f8f35da693.jpg"


        }}
      />
      <Pessoas
        dados={{
          nome: "Neymar",
          idade: 33,
          Imagem: "https://i.pinimg.com/736x/22/6b/ec/226beca8f934576f5cd3c3f8f35da693.jpg"


        }}
      />
  */}

{/*  Outra forma de se fazer igual o exemplo acima é criar uma lista direto aqui , Segue oexemplo a baixo, a lista foi insida aqui msm no cabeçalho*/}


{/* explicação em sala de aula comente essa parte do codigo */}
{/* 
{listaJogadores.map (
  (jogador) => {
    return (
      <Pessoas 
      dados={jogador}
      />

    )

  }
)}
 */}

{/* Aqui foi feita a explicação em sala do professor a forma como poderiaos ter feito */}
{/*  <Atleta
nome="Neymar"
idade={33}
imagem="https://i.pinimg.com/736x/22/6b/ec/226beca8f934576f5cd3c3f8f35da693.jpg"
  />
 */}

 {/* Novo jeito para se fazer , deixando o codigo mais limpo */}


{listaJogadores.map(
  jogador => {
    return(
      <Atleta 
      nome={jogador.nome}
      idade={jogador.idade}
      imagem={jogador.Imagem}
      />
    )
  }
)}




    </View>

    </ScrollView>

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
