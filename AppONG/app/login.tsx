import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function Login() {

  // Estado para armazenar email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função de login com validação
  const handleLogin = () => {

    console.table({ email, senha });

    // Validação extra (campos vazios)
    if (!email || !senha) {
      console.log("⚠️ Preencha todos os campos");
      return;
    }

    // Validação principal
    if (email.includes("@") && senha.length > 6) {
      console.log("✅ Acesso autorizado para:", email);
      // Futuramente: router.push('/home');
    } else {
      console.log("❌ Falha no login: E-mail inválido ou senha muito curta.");
    }
  };

  return (
    <View style={styles.container}>

      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Login</Text>

      <View style={styles.card}>

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

        {/* Feedback visual do estado */}
        {email.length > 0 && (
          <Text style={styles.helper}>
            Logando como: {email}
          </Text>
        )}

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

  helper: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
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