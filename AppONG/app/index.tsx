import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";

export default function Index() {

  // 🔥 recebendo parâmetros
  const { nome, id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      
      <Stack.Screen 
        options={{ 
          headerShown: false,
          title: "Início" 
        }} 
      />
      
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.title}>ONG Connect</Text>

      {/* 👇 NOVO: exibição do usuário */}
      {nome && (
        <Text style={styles.userInfo}>
          Olá, {nome} (ID: {id})
        </Text>
      )}

      <View style={styles.header}>
        <Text style={styles.subtitle}>
          Ponte entre a solidariedade e a necessidade.
        </Text>

        <Link href="/projetos" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Conhecer Projetos</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/login" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e88e5',
    paddingHorizontal: 25,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    letterSpacing: 1,
  },
  header: {
    width: '100%',
    padding: 25,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 25,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#34a853',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: '#ea4335',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  userInfo: {
  color: '#ffffff',
  fontSize: 16,
  marginBottom: 15,
},
});
