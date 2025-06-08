import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React from 'react'
import {Ionicons} from "@expo/vector-icons"

import HomeScreen from "../screens/HomeScreen"
import ProdutoScreen from "../screens/ProdutoScreen"
import CarrinhoScreen from "../screens/CarrinhoScreen"

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
  <Tab.Navigator>

    <Tab.Screen 
    name="HomeScreen"
    component={HomeScreen}
    options={{
      title: "Catálogo",
                headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
    />

  
        <Tab.Screen 
        name="CarrinhoScreen"
        component={CarrinhoScreen}
         options={{
          title: 'Carrinho',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
         }}
        />




  </Tab.Navigator>
  )
}

