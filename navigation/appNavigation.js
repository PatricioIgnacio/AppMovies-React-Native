import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <HomeScreen></HomeScreen>
    </NavigationContainer>
  );
}
