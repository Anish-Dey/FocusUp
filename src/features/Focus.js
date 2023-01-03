import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../component/roundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  text: {
    color: color.white,
  },
});
