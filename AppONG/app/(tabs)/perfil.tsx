import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

export default function PerfilScreen() {

  function editarInteresses() {

    Alert.alert(
      'Interesses',
      'Quais causas você prefere?',

      [
        {
          text: 'Educação',
        },

        {
          text: 'Meio Ambiente',
        },

        {
          text: 'Saúde',
        },

        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  }

  return (

    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.avatar}
        />

        <Text style={styles.nome}>
          Eloisa
        </Text>

        <Text style={styles.email}>
          elo@email.com
        </Text>

        <View style={styles.infoBox}>

          <Text style={styles.infoTitle}>
            Interesses
          </Text>

          <Text style={styles.infoText}>
            Educação • Sustentabilidade • Saúde
          </Text>

        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={editarInteresses}
        >

          <Text style={styles.botaoTexto}>
            Editar Interesses
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',

    elevation: 6,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 20,
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },

  email: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 5,
    marginBottom: 25,
  },

  infoBox: {
    width: '100%',
    backgroundColor: '#f4f7fb',
    borderRadius: 18,
    padding: 18,
    marginBottom: 25,
  },

  infoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1e88e5',
  },

  infoText: {
    fontSize: 15,
    color: '#374151',
  },

  botao: {
    width: '100%',
    backgroundColor: '#34a853',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});