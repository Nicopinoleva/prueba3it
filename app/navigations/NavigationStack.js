import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcome from "../screens/Welcome";
import home from "../screens/Home";
import priceDetail from "../screens/PriceDetail";
import priceGraph from "../screens/PriceGraph";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={home}
          options={{ title: 'Indicadores' }}
        />
        <Stack.Screen
          name="priceDetail"
          component={priceDetail}
          options={({ route }) => ({ title: route.params.codigo })}
        />
        <Stack.Screen
          name="priceGraph"
          component={priceGraph}
          options={({ route }) => ({ title: route.params.nombre })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}