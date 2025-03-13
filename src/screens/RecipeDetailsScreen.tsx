import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

// @ts-ignore
export default function RecipeDetailsScreen({ route }) {
    const { recipe } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
            <Text style={styles.recipeDetails}>Détails de la recette à afficher ici...</Text>
        </View>
    );
}
