// Importações necessárias
import React, { useState } from 'react';
import styles from '../../constants/styleIndex';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Botao from '../../components/Botao/botao'; // Componente de botão personalizado
import Input from '../../components/Input/input'; // Componente de input personalizado
import checkToxicity from '../../src/lib/ai'; // IA de toxicidade

export default function Chat() {
  const navigation = useNavigation();

  // Declaração de estados
  const [valor, setValor] = useState(''); // Estado para armazenar o valor do input
  const [itens, setItens] = useState([]); // Estado para armazenar a lista de itens
  const [headerText, setHeaderText] = useState('Verifique a agressividade de seu texto'); // Estado para armazenar o texto do header
  const [verificada, setVerificada] = useState(null); // Estado para armazenar o texto verificado
  const [isToxic, setIsToxic] = useState(false); // Estado para armazenar se o texto é tóxico ou não

  // Função para adicionar um item na lista
  const adicionarItem = async () => {
    if (valor.trim()) { // Verifica se o valor não é vazio ou apenas espaços em branco
      const foundToxicities = await checkToxicity(valor); // Chama a função de verificação de toxicidade

      setVerificada(valor); // Armazena o valor verificado

      if (foundToxicities.length > 0) { // Se forem encontradas toxicidades
        setHeaderText(`Conteúdo ${foundToxicities[0]}`); // Atualiza o texto do header com a primeira toxicidade encontrada
        setIsToxic(true); // Define que o texto é tóxico
      } else { // Se não forem encontradas toxicidades
        setHeaderText('Verifique a agressividade de seu texto'); // Restaura o texto original do header
        setItens([...itens, valor]); // Adiciona o valor à lista de itens
        setIsToxic(false); // Define que o texto não é tóxico
      }
      setValor(''); // Limpa o input
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerText}</Text>
        {verificada && ( // Se houver um texto verificado, exibe-o
          <View style={styles.item}>
            <Text style={[styles.itemText, { color: isToxic ? 'red' : 'green' }]}>{verificada}</Text> {/*Deixa o texto vermelho quando for tóxico e verde quando não for*/}
          </View>
        )}
        <FlatList
          data={itens} // Dados da lista
          keyExtractor={(item, index) => index.toString()} // Coloca um id em cada item
          renderItem={({ item }) => ( // Função para renderizar cada item
            <View style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.mainContent}>
        <Input
          placeholder='Digite aqui...'
          value={valor} // Valor do input
          onChangeText={setValor} // Função chamada ao mudar o texto do input
        />
        <Botao onPress={adicionarItem}/> {/*Chama a função adicionarItem ao ser pressionado*/}
      </View>
    </SafeAreaView>
  );
}