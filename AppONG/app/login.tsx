import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>

      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Login</Text>

      <View style={styles.card}>

        <TextInput
          style={styles.input}
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => console.log("Login pressionado")}
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