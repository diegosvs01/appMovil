import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ComponenteParcial01 = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const items = [
    { id: '1', name: 'PropsParcial02' },
    { id: '2', name: 'AxiosParcial03' },
    { id: '3', name: 'AsyncStorageParcial04' },  // Opción añadida
  ];

  const handleNavigation = (screen) => {
    if (screen === 'PropsParcial02') {
      navigation.navigate(screen, { nombre: inputValue, semestre: 8 });
    } else {
      navigation.navigate(screen);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>

      <Image
        source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }}
        style={styles.logo}
      />

      <TextInput
        placeholder="Ingresar Nombre"
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigation(item.name)}>
            <Text style={styles.listItem}>{item.name}</Text>
          </TouchableOpacity>
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
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  listItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default ComponenteParcial01;
