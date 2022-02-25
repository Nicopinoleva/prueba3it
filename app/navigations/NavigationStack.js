import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcome from "../screens/Welcome";
import home from "../screens/Home";

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
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}