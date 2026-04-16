import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function Dashboard() {
  // 1. Recuperando os parâmetros (Objetivo 4)
  const { userName, voluntarioId } = useLocalSearchParams();

  const handleLogout = () => {
    // Habilidade S: Resetando a rota para que o usuário não consiga "voltar" ao painel
    // No Expo Router, usamos replace para substituir a stack atual
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeSection}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Faça seu login!</Text>
      </View>

      <Text style={styles.sectionTitle}>Causas Disponíveis</Text>

      <ScrollView style={styles.list}>
        <View style={styles.card}>
          <Text style={styles.projectTitle}>Projeto Sorriso</Text>
          <Text style={styles.location}>📍 São Paulo - SP</Text>
          <Text style={styles.description}>
            Projeto que arrecada brinquedos para crianças em situação de vulnerabilidade.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.projectTitle}>Alimento Solidário</Text>
          <Text style={styles.location}>📍 Campinas - SP</Text>
          <Text style={styles.description}>
            Distribuição de alimentos para famílias em situação de insegurança alimentar.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.projectTitle}>Educação para Todos</Text>
          <Text style={styles.location}>📍 Rio de Janeiro - RJ</Text>
          <Text style={styles.description}>
            Aulas gratuitas de reforço escolar para crianças da rede pública.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver mais</Text>
          </TouchableOpacity>
        </View>


        {/* Adicione mais cards conforme necessário */}
      </ScrollView>

      {/* Botão de Sair com lógica de Reset (Objetivo 4) */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Sair do Painel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e88e5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  welcomeSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#e3f2fd',
    textAlign: 'center',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    color: '#666',
    marginBottom: 8,
  },
  description: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#34a853',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
