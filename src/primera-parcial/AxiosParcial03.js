import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const AxiosParcial03 = () => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Petición GET a la API externa
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setComments(response.data);
        setFilteredComments(response.data); // Inicialmente, mostramos todos los comentarios
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Filtro de búsqueda
  useEffect(() => {
    const filtered = comments.filter(comment =>
      comment.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComments(filtered);
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={filteredComments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text style={styles.commentText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  commentContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  commentText: {
    fontSize: 16,
  },
});

export default AxiosParcial03;
