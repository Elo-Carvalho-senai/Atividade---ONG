import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Projetos() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Projetos Sociais</Text>

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

      </ScrollView>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>Voltar</Text>
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

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
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

  backButton: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  backText: {
    color: '#fff',
    fontWeight: '600',
  },

});