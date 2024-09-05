import React from 'react';
import { View, Text } from 'react-native';

const Props02 = ({ route }) => {
  const { nombre, estado } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Componente Props02</Text>
      <Text>Nombre: {nombre}</Text>
      <Text>Estado: {estado ? 'True' : 'False'}</Text>
    </View>
  );
};

export default Props02;
