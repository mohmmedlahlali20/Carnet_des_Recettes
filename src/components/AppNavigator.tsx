import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Recettes' }} />
                <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ title: 'Détails' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
