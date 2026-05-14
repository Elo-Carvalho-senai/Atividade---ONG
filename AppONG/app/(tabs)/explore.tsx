import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { useEffect, useState } from 'react';

export default function ExploreScreen() {

  const [loading, setLoading] = useState(true);

  const [ongs, setOngs] = useState<any[]>([]);

  const [ongSelecionada, setOngSelecionada] = useState<any>(null);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {

      setOngs([
        {
          id: '1',
          nome: 'ONG Esperança',
          causa: 'Ajuda humanitária',
          descricao:
            'A ONG Esperança atua com distribuição de alimentos e apoio social para famílias em situação de vulnerabilidade.',
        },

        {
          id: '2',
          nome: 'Projeto Verde',
          causa: 'Sustentabilidade',
          descricao:
            'Projeto focado em reflorestamento urbano, educação ambiental e reciclagem comunitária.',
        },

        {
          id: '3',
          nome: 'Educação para Todos',
          causa: 'Educação',
          descricao:
            'Oferece reforço escolar gratuito e acesso à leitura para crianças.',
        },
      ]);

      setLoading(false);

    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  function abrirDetalhes(item: any) {

    setOngSelecionada(item);

    setModalVisible(true);
  }

  if (loading) {

    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#34a853" />

        <Text style={styles.loadingText}>
          Carregando ONGs...
        </Text>
      </View>
    );
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Explorar ONGs
      </Text>

      <FlatList
        data={ongs}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => abrirDetalhes(item)}
          >

            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
            />

            <View style={styles.infoContainer}>

              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text style={styles.causa}>
                {item.causa}
              </Text>

            </View>

          </TouchableOpacity>
        )}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalCard}>

            <Text style={styles.modalTitulo}>
              {ongSelecionada?.nome}
            </Text>

            <Text style={styles.modalTexto}>
              {ongSelecionada?.descricao}
            </Text>

            <TouchableOpacity
              style={styles.botaoFechar}
              onPress={() => setModalVisible(false)}
            >

              <Text style={styles.botaoTexto}>
                Fechar
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    padding: 20,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f7fb',
  },

  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#6b7280',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 18,
    marginBottom: 18,

    flexDirection: 'row',
    alignItems: 'center',

    elevation: 5,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  logo: {
    width: 70,
    height: 70,
    borderRadius: 18,
    marginRight: 15,
  },

  infoContainer: {
    flex: 1,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },

  causa: {
    fontSize: 15,
    color: '#6b7280',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 25,
  },

  modalTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 15,
  },

  modalTexto: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 25,
  },

  botaoFechar: {
    backgroundColor: '#34a853',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});