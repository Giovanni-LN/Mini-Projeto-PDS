import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';

type Dupla = {
  id: number;
  nomeIntegrante: string;
  responsabilidade: string;
};

const DuplasTable = () => {
  const [duplas, setDuplas] = useState<Dupla[]>([]);

  useEffect(() => {
    api.get<Dupla[]>('/duplas')
      .then((response) => setDuplas(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={duplas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.id}</Text>
            <Text>{item.nomeIntegrante}</Text>
            <Text>{item.responsabilidade}</Text>
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

export default DuplasTable;
