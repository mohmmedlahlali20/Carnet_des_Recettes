import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../styles/styles';

const recipes = [
    { id: '1', title: 'Pâtes Carbonara' },
    { id: '2', title: 'Salade César' },
    { id: '3', title: 'Pâtes Carbonara' },
    { id: '4', title: 'Salade César' },
    { id: '5', title: 'Tarte au citron' },
    { id: '6', title: 'Tarte au citron' },
];

// @ts-ignore
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.recipeItem} onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}>
                        <Text style={styles.recipeTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
