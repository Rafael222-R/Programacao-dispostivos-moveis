import React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import EscudoScreen from "./screen/EscudoScreen";
import JogadresScreen from "./screen/JogadresScreen";
import TitulosScreen from "./screen/TitulosScreen";

const Tab = createBottomTabNavigator();

export default function App() {
 

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="EscudoScreen"
            component={EscudoScreen}
            options={{
              title: "SOBRE O CLUBE",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "orange",
              },
              tabBarInactiveTintColor: "black",
              tabBarActiveTintColor: "blue",
              tabBarLabelStyle: {
                fontFamily: "Verdana",
                fontSize: 14,
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="JogadoresScreen"
            component={JogadresScreen}
            options={{
              title: "JOGADORES",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "orange",
              },
              tabBarInactiveTintColor: "gray",
              tabBarActiveTintColor: "blue",
              tabBarLabelStyle: {
                fontFamily: "Verdana",
                fontSize: 14,
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="football" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="TitulosScreen"
            component={TitulosScreen}
             options={{
              title: "TÍTULOS",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "orange",
              },
              tabBarInactiveTintColor: "black",
              tabBarActiveTintColor: "blue",
              tabBarLabelStyle: {
                fontFamily: "Verdana",
                fontSize: 14,
              },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy-sharp" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
