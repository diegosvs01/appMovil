import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [facultad, setFacultad] = useState('');
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    listarDatos();
  }, []);

  // Crear y guardar los datos
  const guardarDatos = async () => {
    if (codigo && carrera && facultad) {
      const newData = { codigo, carrera, facultad };
      const storedData = await AsyncStorage.getItem('datos');
      const parsedData = storedData ? JSON.parse(storedData) : [];
      parsedData.push(newData);
      await AsyncStorage.setItem('datos', JSON.stringify(parsedData));
      setCodigo('');
      setCarrera('');
      setFacultad('');
      listarDatos();
    } else {
      alert('Todos los campos son obligatorios');
    }
  };

  // Listar los datos
  const listarDatos = async () => {
    const storedData = await AsyncStorage.getItem('datos');
    if (storedData) {
      setDataList(JSON.parse(storedData));
    }
  };

  // Eliminar un dato específico
  const eliminarDato = async (codigo) => {
    const storedData = await AsyncStorage.getItem('datos');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const newData = parsedData.filter(item => item.codigo !== codigo);
    await AsyncStorage.setItem('datos', JSON.stringify(newData));
    listarDatos();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
      />
      <TextInput
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
        style={styles.input}
      />
      <TextInput
        placeholder="Facultad"
        value={facultad}
        onChangeText={setFacultad}
        style={styles.input}
      />
      <Button title="Guardar" onPress={guardarDatos} />

      <FlatList
        data={dataList}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Código: {item.codigo}</Text>
            <Text style={styles.itemText}>Carrera: {item.carrera}</Text>
            <Text style={styles.itemText}>Facultad: {item.facultad}</Text>
            <TouchableOpacity onPress={() => eliminarDato(item.codigo)}>
              <Text style={styles.deleteButton}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
    height: 40,
  },
  itemContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  itemText: {
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
    marginTop: 5,
  },
});

export default AsyncStorageParcial04;
