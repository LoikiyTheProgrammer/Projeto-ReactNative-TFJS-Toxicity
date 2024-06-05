import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../constants/styleIndex';

export default function Botao({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Verificar</Text>
    </TouchableOpacity>
  );
}