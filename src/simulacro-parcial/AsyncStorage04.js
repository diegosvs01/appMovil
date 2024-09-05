import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, ListItem, Text } from '@rneui/themed';

const AsyncStorage04 = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [key, setKey] = useState(''); // Almacena la cédula original antes de la edición
  const [dataList, setDataList] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    try {
      setIsDisabled(false);
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      setDataList(items.map(([cedula, value]) => ({ cedula, value })));
    } catch (error) {
      console.error('Error loading list', error);
    }
  };

  const editar = async (cedula, value) => {
    setKey(cedula); // Guardar la cédula original
    setId(cedula);  // Mostrar la cédula actual en el campo de texto
    setName(value);
    setIsDisabled(true);
  };

  const guardar = async () => {
    try {
      if (name.trim() === '' || id.trim() === '') {
        Alert.alert('Error', 'Los campos no pueden estar vacíos');
        return;
      }
      if (!isDisabled) {
        await AsyncStorage.setItem(id, name);
        setName('');
        setId('');
        listar();
        Alert.alert('Éxito', 'Datos guardados');
      } else {
        actualizar();
      }
    } catch (error) {
      Alert.alert('Error', 'Error al guardar los datos');
      console.error(error);
    }
  };

  const actualizar = async () => {
    try {
      if (key !== id) { // Si la cédula ha cambiado
        await AsyncStorage.removeItem(key); // Eliminar la cédula antigua
      }
      await AsyncStorage.setItem(id, name); // Guardar el nuevo valor
      setName('');
      setId('');
      listar();
      Alert.alert('Éxito', 'Datos actualizados');
    } catch (error) {
      Alert.alert('Error', 'Error al actualizar los datos');
      console.error(error);
    }
  };

  const eliminar = async (cedula) => {
    try {
      await AsyncStorage.removeItem(cedula);
      listar();
      Alert.alert('Éxito', 'Datos eliminados');
    } catch (error) {
      Alert.alert('Error', 'Error al eliminar los datos');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Cédula"
        
        value={id}
        onChangeText={setId}
        style={styles.input}
      />
      <Input
        placeholder="Ingrese un nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title={isDisabled ? "Actualizar" : "Guardar"} onPress={guardar} />
      <Text h4 style={styles.title}>Lista de Datos:</Text>
      {dataList.map(({ cedula, value }) => (
        <ListItem key={cedula} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{value}</ListItem.Title>
            <ListItem.Subtitle>Cédula: {cedula}</ListItem.Subtitle>
          </ListItem.Content>
          <Button
            icon={{ name: 'edit', type: 'font-awesome', size: 15, color: 'white' }}
            onPress={() => editar(cedula, value)}
          />
          <Button
            icon={{ name: 'trash', type: 'font-awesome', size: 15, color: 'white' }}
            onPress={() => eliminar(cedula)}
          />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  title: {
    marginVertical: 10,
  },
});

export default AsyncStorage04;
