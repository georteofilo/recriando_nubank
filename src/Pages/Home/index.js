import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '17/09/2022',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'Pix Cliente X',
        value: '1610,00',
        date: '17/09/2022',
        type: 1, // entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '2700,00',
        date: '17/09/2022',
        type: 1, // entradas
    }
]



export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="George Rocha"/>

        <Balance saldo="8.970,15" gastos="-6.345,87" />

        <Text style={styles.title}>Últimas movimentações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
  }
});
