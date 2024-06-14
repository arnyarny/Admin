import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboard from "../screens/AdminDashboard";
import React from "react";

const Stack = createNativeStackNavigator();

const NavagationStack = () => {
  return (  // <-- Add return here
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdminDashboard">
        <Stack.Screen
          options={{ headerShown: false }}
          name="AdminDashboard"
          component={AdminDashboard}
        />
        {/* Uncomment and add other screens as needed */}
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavagationStack;

