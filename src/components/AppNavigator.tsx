import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import RegisterScreen from "../screens/RegisterScreen";
import {useAppSelector} from "../hooks/useAppDispatch.ts";

const Stack = createStackNavigator();

const MainNavigator = () => {
  // @ts-ignore
    const {isAuthenticated} = useAppSelector(state => state.auth);
  const navigation = useNavigation();

  useEffect(() => {
      console.log(isAuthenticated);
    if (!isAuthenticated) {
      // @ts-ignore
      navigation.navigate('Register');
    }
  }, [isAuthenticated, navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Recettes'}}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetailsScreen}
        options={{title: 'Détails'}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Inscription'}}
      />
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}
