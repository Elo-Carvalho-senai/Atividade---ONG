import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { LinearGradient } from 'expo-linear-gradient';

import { Image } from 'expo-image';

export default function DashboardScreen() {

  return (

    <View style={styles.container}>

      {/* HEADER */}

      <LinearGradient
        colors={['#1e88e5', '#34a853']}
        style={styles.header}
      >

        <View>

          <Text style={styles.greeting}>
            Olá, Eloisa 👋
          </Text>

          <Text style={styles.subtitle}>
            Obrigado por ajudar ONGs e projetos sociais.
          </Text>

        </View>

        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />

      </LinearGradient>

      {/* RESUMO */}

      <View style={styles.cardsContainer}>

        <View style={styles.card}>

          <Ionicons
            name="people"
            size={32}
            color="#1e88e5"
          />

          <Text style={styles.cardNumber}>
            12
          </Text>

          <Text style={styles.cardLabel}>
            ONGs disponíveis
          </Text>

        </View>

        <View style={styles.card}>

          <Ionicons
            name="time"
            size={32}
            color="#34a853"
          />

          <Text style={styles.cardNumber}>
            14h
          </Text>

          <Text style={styles.cardLabel}>
            Horas voluntárias
          </Text>

        </View>

      </View>

      {/* PRÓXIMA ATIVIDADE */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          Próxima atividade
        </Text>

        <View style={styles.activityCard}>

          <View style={styles.iconBox}>

            <Ionicons
              name="leaf"
              size={28}
              color="#fff"
            />

          </View>

          <View>

            <Text style={styles.activityTitle}>
              Projeto Verde
            </Text>

            <Text style={styles.activityText}>
              Mutirão • Sábado às 09h
            </Text>

          </View>

        </View>

      </View>

      {/* BOTÕES */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          Ações rápidas
        </Text>

        <View style={styles.actionsContainer}>

          <TouchableOpacity style={styles.actionButton}>

            <Ionicons
              name="search"
              size={26}
              color="#1e88e5"
            />

            <Text style={styles.actionText}>
              Explorar
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Ionicons
              name="person"
              size={26}
              color="#34a853"
            />

            <Text style={styles.actionText}>
              Perfil
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },

  header: {
    paddingTop: 70,
    paddingBottom: 40,
    paddingHorizontal: 25,

    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  subtitle: {
    fontSize: 15,
    color: '#e5f3ff',
    marginTop: 8,
    width: 220,
  },

  logo: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#fff',
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -25,
  },

  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,

    elevation: 5,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  cardNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#1f2937',
  },

  cardLabel: {
    marginTop: 6,
    color: '#6b7280',
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 28,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
  },

  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,

    flexDirection: 'row',
    alignItems: 'center',

    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: '#34a853',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 15,
  },

  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },

  activityText: {
    color: '#6b7280',
    marginTop: 5,
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionButton: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',

    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  actionText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
  },
});