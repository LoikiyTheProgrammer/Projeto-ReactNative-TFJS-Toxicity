import React from 'react';
import { TextInput } from 'react-native';
import styles from '../../constants/styleIndex';

export default function Input({ placeholder, value, onChangeText, }) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
}