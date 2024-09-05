import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  // Recibimos los parámetros enviados desde ComponenteParcial01
  const { nombre, semestre } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi nombre es: {nombre},actualmente curso el: {semestre} semestre</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default PropsParcial02;
