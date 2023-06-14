import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import AppBar from './AppBar';


const RecipeDetailPage = ({ recipe, onClose }) => {
  return (
    <Modal visible={true} onRequestClose={onClose}>
      <View style={styles.container}>
        <AppBar />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>{recipe.title}</Text>
            <Image source={{ uri: recipe.image }} style={{ width: 360, height: 310, alignItems: 'center',}} />
            <View style={styles.div}>
            <Text>Tempo de Preparo: {recipe.preparationTime}</Text>
            <Text>Nível de Dificuldade: {recipe.difficulty}</Text>
          </View>
            <View style={styles.divIngredientes}>
            <View style={styles.divIngredientes}>
          <Text style={{ fontWeight: 'bold'}}>Ingredientes</Text>
          {recipe.ingredients.map((section, index) => (
            <View key={index}>
              <Text style={{ fontWeight: '500', marginTop: 10 }}>{section.section}</Text>
              <Text>{section.items.join('\n')}</Text>
            </View>
          ))}
          <View style={styles.divPreparo}>
            <Text style={{ fontWeight: '500'}}>Modo de Preparo</Text>
            {recipe.instructions.map((section, index) => (
            <View key={index}>
            <Text style={{ fontWeight: '500', marginTop: 10 }}>{section.section}</Text>
            <Text>{section.items.join('\n')}</Text>
          </View>

          ))}

          </View>
        </View>
    </View>

          

        
              
            </View>
          <View>
            {/* <View style={styles.divPreparo}>
              <Text style={{ fontWeight: '500' }}>'Modo de Preparo'</Text>
              <Text>{recipe.instructions}</Text>
            </View> */}
            <TouchableOpacity onPress={onClose} style={styles.divClose}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    backgroundColor: '#D7F2FF',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    padding: 5,
    fontWeight: 'bold',
    color: '#ff4ca2',
  },
  div: {
    backgroundColor: '#ff4ca2',
    color: '#fff',
    margin: 15,
    elevation: 2,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },
  divIngredientes: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },
  divPreparo: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    
  },
  divClose: {
    backgroundColor: '#D7F2FF',
    margin: 15,
    elevation: 2,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    width: 65,
   
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    
  },

});

export default RecipeDetailPage;
