import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboard from "../screens/AdminDashboard";
import Experiment from "../screens/Experiment";
import React from "react";
import New from "../screens/New";

const Stack = createNativeStackNavigator();

const NavagationStack = () => {
  return (
    // <-- Add return here
    <NavigationContainer>
      <Stack.Navigator initialRouteName="New">
        <Stack.Screen
          options={{ headerShown: false }}
          name="New"
          component={New}
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
