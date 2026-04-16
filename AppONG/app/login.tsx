import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function Login() {
  // Estado para capturar o nome do voluntário (Objetivo 3)
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // 1. Validação: Verifica se o nome não está vazio (Objetivo 3)
    if (!nome.trim()) {
      Alert.alert("Erro", "Por favor, digite seu nome de voluntário.");
      return;
    }

    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    // 2. Validação de formato (seguindo seu código base)
    if (email.includes("@") && senha.length > 4) {

      // 3. Gerar ID aleatório (Objetivo 3)
      const voluntarioId = Math.floor(Math.random() * 10000).toString();

      // 4. Navegação para Dashboard enviando parâmetros (Habilidade S)
      router.push({
        pathname: "/dashboard",
        params: {
          nome: nome,
          id: "123"
        }
      });

      console.log(`✅ Indo para Dashboard: ${nome} (ID: ${voluntarioId})`);
    } else {
      Alert.alert("Erro", "E-mail inválido ou senha muito curta.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Login</Text>

      <View style={styles.card}>
        {/* Input para capturar o nome do voluntário */}
        <TextInput
          style={styles.input}
          placeholder="Nome do Voluntário"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ... Estilos permanecem os mesmos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e88e5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  logo: {
    width: 110,
    height: 110,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#34a853',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  backText: {
    color: '#1e88e5',
    fontWeight: '600',
  },
});
