import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import Categoria from "./src/screens/Categoria";
import SobreMim from "./src/screens/SobreMim";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={
          {
            title: 'Cafeteria do Felps',
            headerStyle: {
              backgroundColor: '#964b00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
            headerTitleAlign: 'center',
          }
        } />
        <Stack.Screen name="Categoria" component={Categoria} />
        <Stack.Screen name="SobreMim" component={SobreMim} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}