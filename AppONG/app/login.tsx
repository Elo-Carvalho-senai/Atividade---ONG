import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

import { router } from 'expo-router';

import { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen() {

  const [nome, setNome] = useState('');

  const [email, setEmail] = useState('');

  const [senha, setSenha] = useState('');

  function entrar() {

    if (!nome || !email || !senha) {

      Alert.alert(
        'Erro',
        'Preencha todos os campos.'
      );

      return;
    }

    if (!email.includes('@')) {

      Alert.alert(
        'Erro',
        'Digite um e-mail válido.'
      );

      return;
    }

    if (senha.length < 4) {

      Alert.alert(
        'Erro',
        'A senha deve ter pelo menos 4 caracteres.'
      );

      return;
    }

    router.push({
      pathname: '/(tabs)/perfil',
      params: {
        userName: nome,
      },
    });
  }

  return (

    <View style={styles.container}>

      {/* TOPO */}

      <View style={styles.topContainer}>

        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          ONG Connect
        </Text>

        <Text style={styles.subtitle}>
          Conectando voluntários a causas que transformam vidas.
        </Text>

      </View>

      {/* CARD */}

      <View style={styles.card}>

        {/* NOME */}

        <View style={styles.inputContainer}>

          <Ionicons
            name="person"
            size={20}
            color="#6b7280"
          />

          <TextInput
            placeholder="Nome do voluntário"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

        </View>

        {/* EMAIL */}

        <View style={styles.inputContainer}>

          <Ionicons
            name="mail"
            size={20}
            color="#6b7280"
          />

          <TextInput
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

        </View>

        {/* SENHA */}

        <View style={styles.inputContainer}>

          <Ionicons
            name="lock-closed"
            size={20}
            color="#6b7280"
          />

          <TextInput
            placeholder="Digite sua senha"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />

        </View>

        {/* BOTÃO */}

        <TouchableOpacity
          style={styles.button}
          onPress={entrar}
        >

          <Text style={styles.buttonText}>
            Entrar
          </Text>

        </TouchableOpacity>

        {/* TEXTO EXTRA */}

        <Text style={styles.footerText}>
          Juntos podemos transformar comunidades 💚
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    justifyContent: 'center',
    padding: 25,
  },

  topContainer: {
    alignItems: 'center',
    marginBottom: 35,
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 15,
  },

  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    paddingHorizontal: 15,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 25,

    elevation: 6,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#f4f7fb',

    borderRadius: 16,

    paddingHorizontal: 15,

    marginBottom: 18,

    height: 58,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#1f2937',
  },

  button: {
    backgroundColor: '#34a853',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#6b7280',
    fontSize: 14,
  },
});