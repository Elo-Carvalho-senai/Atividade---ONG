import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function DashboardScreen() {

  // 🔥 PEGAR OS DOIS
  const { nome, id } = useLocalSearchParams();
  const router = useRouter();

  function sair() {
    router.replace("/login");
  }

  function irProjetos() {
    router.push("/projetos");
  }

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Olá,{" "}
          <Text style={styles.nome}>
            {nome}
          </Text>
        </Text>

        {/* 👇 NOVO: mostra o ID */}
        <Text style={styles.id}>
          ID: {id}
        </Text>

        <Text style={styles.sub}>
          Que bom ter você aqui para ajudar!
        </Text>

        <TouchableOpacity style={styles.botaoPrimary} onPress={irProjetos}>
          <Text style={styles.textoBotao}>Ver Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSecondary} onPress={sair}>
          <Text style={styles.textoBotao}>Sair</Text>
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
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 25,
  },

  nome: {
    fontWeight: 'bold',
    color: '#1e88e5',
  },

  botaoPrimary: {
    width: '100%',
    backgroundColor: '#34a853',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  botaoSecondary: {
    width: '100%',
    backgroundColor: '#ea4335',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  id: {
  fontSize: 14,
  color: '#666',
  marginBottom: 10,
},

sub: {
  fontSize: 14,
  color: '#555',
  marginBottom: 25,
  textAlign: 'center',
},
});