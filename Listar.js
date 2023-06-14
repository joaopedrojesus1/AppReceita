import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => {
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.6; // Definindo a largura da imagem como 80% da largura da tela

  return (
    <TouchableOpacity onPress={() => onPress(recipe)} activeOpacity={1}>
      <View style={styles.container}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Image source={{ uri: recipe.image }} style={{ width: imageWidth, height: 140, backgroundColor: '#D7F2FF'}} />
      </View>
    </TouchableOpacity>
  );
};

const RecipeListPage = ({ recipes, onPressRecipe }) => {
  return (
    <View>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} onPress={onPressRecipe} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7F2FF',
    margin: 15,
    elevation: 2,
    alignItems: 'center',
    paddingBottom: 25,
  },
  title: {
    fontSize: 17,
    padding: 5,
    fontWeight: 'bold',
    color: '#EE318C',
  }
});

export default RecipeListPage;
