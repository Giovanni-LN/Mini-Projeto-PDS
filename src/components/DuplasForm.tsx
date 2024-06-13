import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../services/api';

type Integrante = {
  id: number;
  nome: string;
  idade: number;
  email: string;
};

type Dupla = {
  id: number;
  nomeIntegrante: string;
  responsabilidade: string;
};

type Props = {
  onSave: (dupla: Dupla) => void;
};

const DuplasForm = ({ onSave }: Props) => {
  const [integrantes, setIntegrantes] = useState<Integrante[]>([]);
  const [nomeIntegrante, setNomeIntegrante] = useState<string>('');
  const [responsabilidade, setResponsabilidade] = useState<string>('');

  useEffect(() => {
    api.get<Integrante[]>('/integrantes')
      .then((response) => setIntegrantes(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = () => {
    api.post<Dupla>('/duplas', { nomeIntegrante, responsabilidade })
      .then((response) => {
        onSave(response.data);
        setNomeIntegrante('');
        setResponsabilidade('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.form}>
      <Picker
        selectedValue={nomeIntegrante}
        onValueChange={(itemValue: string) => setNomeIntegrante(itemValue)}
      >
        <Picker.Item label="Selecione um Integrante" value="" />
        {integrantes.map((integrante) => (
          <Picker.Item key={integrante.id} label={integrante.nome} value={integrante.nome} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Responsabilidade"
        value={responsabilidade}
        onChangeText={setResponsabilidade}
      />
      <Button title="Adicionar Dupla" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default DuplasForm;
