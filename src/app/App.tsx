import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import IntegrantesForm from './components/IntegrantesForm';
import IntegrantesTable from './components/IntegrantesTable';
import DuplasForm from './components/DuplasForm';
import DuplasTable from './components/DuplasTable';

const App = () => {
  const handleSaveIntegrante = (integrante: any) => { // Substitua 'any' pela interface correta se possível
    console.log('Integrante salvo:', integrante);
  };

  const handleSaveDupla = (dupla: any) => { // Substitua 'any' pela interface correta se possível
    console.log('Dupla salva:', dupla);
  };

  return (
    <SafeAreaView style={styles.container}>
      <IntegrantesForm onSave={handleSaveIntegrante} />
      <IntegrantesTable />
      <DuplasForm onSave={handleSaveDupla} />
      <DuplasTable />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
