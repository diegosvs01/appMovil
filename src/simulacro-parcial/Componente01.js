import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

const Componente01 = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const items = [
    { id: '1', name: 'Props02' },
    { id: '2', name: 'Axios03' },
    { id: '3', name: 'AsyncStorage04' },  // Agregamos la entrada AsyncStorage04
  ];

  const handleNavigation = (screen) => {
    if (screen === 'Props02') {
      navigation.navigate('Props02', { nombre: inputValue, estado: false });
    } else {
      navigation.navigate(screen);  // Navegamos a cualquier pantalla definida, incluyendo AsyncStorage04
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Pantalla Principal</Text>
      <TextInput
        placeholder="Ingresa un texto"
        value={inputValue}
        onChangeText={setInputValue}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 10,
        }}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigation(item.name)}>
            <Text style={{ fontSize: 18, padding: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Componente01;
