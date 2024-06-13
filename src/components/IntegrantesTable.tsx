import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';

type Integrante = {
  id: number;
  nome: string;
  idade: number;
  email: string;
};

const IntegrantesTable = () => {
  const [integrantes, setIntegrantes] = useState<Integrante[]>([]);

  useEffect(() => {
    api.get<Integrante[]>('/integrantes')
      .then((response) => setIntegrantes(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={integrantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.id}</Text>
            <Text>{item.nome}</Text>
            <Text>{item.idade}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default IntegrantesTable;
