import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

import { useState } from 'react';

export default function LoginScreen() {

  const [nome, setNome] = useState('');

  function entrar() {

    router.push({
      pathname: '/(tabs)/perfil',
      params: {
        userName: nome,
      },
    });
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        ONG Connect
      </Text>

      <Text style={styles.subtitle}>
        Conectando voluntários a causas sociais 💚
      </Text>

      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={entrar}
      >

        <Text style={styles.buttonText}>
          Entrar
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#f4f7fb',
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 40,
  },

  input: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 18,
    fontSize: 16,
    marginBottom: 20,

    elevation: 3,
  },

  button: {
    backgroundColor: '#34a853',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});