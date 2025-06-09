import {PaperProvider} from "react-native-paper"
import { NavigationContainer, StackRouter} from "@react-navigation/native"
import HomeScreen from "./src/screens/HomeScreen";
import TabRoutes from "./src/routes/TabRoutes";
import StackRoutes from "./src/routes/StackRoutes";
import {CarrinhoProvider} from "./src/contexts/CarrinhoContext"

import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
   <PaperProvider>
    <CarrinhoProvider>
    <NavigationContainer>
      <StackRoutes />
      
    </NavigationContainer>
    </CarrinhoProvider>
   </PaperProvider>
  );
}

