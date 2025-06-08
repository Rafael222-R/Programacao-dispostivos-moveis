import React from "react"

import {createStackNavigator} from "@react-navigation/stack"

import Home from "../screens/HomeScreen"
import TabRoutes from "./TabRoutes";
import ImagemCompletaScreen from "../screens/ImagemCompletaScreen";
import ProdutoScreen from "../screens/ProdutoScreen";
import CarrinhoScreen from "../screens/CarrinhoScreen";

const Stack = createStackNavigator ();


export default function StackRoutes() {
  return (
  <Stack.Navigator>
    <Stack.Screen 
    name="TabRoutes"
    component={TabRoutes}
    options={{
            title: "Minha Loja",
            headerTitleAlign: 'center'
        }}
    
    />

    <Stack.Screen 
    name="ProdutoScreen"
    component={ProdutoScreen}
    />

    <Stack.Screen 
    name="ImagemCompleta" 
    component={ImagemCompletaScreen} 
    options={{ headerShown: false }} 
  />

  <Stack.Screen 
  name="Carrinho" 
  component={CarrinhoScreen} 
  
  />




  </Stack.Navigator>
  )
}

