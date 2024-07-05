import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

type Integrante = {
  id: number;
  nome: string;
  idade: number;
  email: string;
};

type Props = {
  onSave: (integrante: Integrante) => void;
};

const IntegrantesForm = ({ onSave }: Props) => {
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {};

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Adicionar Integrante" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default IntegrantesForm;
