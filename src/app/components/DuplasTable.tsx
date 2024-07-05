import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

type Dupla = {
  id: number;
  nomeIntegrante: string;
  responsabilidade: string;
};

const DuplasTable = () => {
  const [duplas, setDuplas] = useState<Dupla[]>([]);

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
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default DuplasTable;
