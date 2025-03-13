import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
},
recipeItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#ffcc80',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
},
recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
},
recipeDetails: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
}
});
