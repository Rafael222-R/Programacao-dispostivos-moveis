// imports 
import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';


// Funçao que representa o componente
export default function App() {
  // Logica do Componente
 const nome = "Rafael Dias"

  //retorno dessa funcção com o tamplate do que vai ser 
  //renderizado na tela (JSX)

  return (
    //ScrollView permite que o conteudo vá ate depois da barra de rolagem
    // não poder ser usado sozinho, tem que ter uma view dentro
    // // ele so envolve o conteudo
    <ScrollView>
    <View style={styles.container}>
      {/* comentario dentro do JSX */}
      {/* */}
      *<StatusBar style="auto" />
    

      {/*css com StyleSheet */}
      <Text style ={styles.texGrande}>Hello Word!!</Text>
      {/*css inline */}
      <Text  style={{fontSize: 50, fontStyle: 'italic'}}>Alguma coisa !!</Text>
      
      <Text>Hello!!!!!!</Text>
      <Text>{nome}</Text>
      <Button title="Enviar" onPress={alert}></Button>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png'
        }}

        style={{
          height: 300,
          width: 300

        }}
      
      />
      <Image
        source={require('./assets/Imagens/images.png')}

        style={{
          height: 300,
          width: 300

        }}
      
      />
       <Image
        source={require('./assets/Imagens/images.png')}

        style={{
          height: 300,
          width: 300

        }}
      
      />
       <Image
        source={require('./assets/Imagens/images.png')}

        style={{
          height: 300,
          width: 300

        }}
      
      />

  

      
    </View>
    </ScrollView>
  );
}


//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
