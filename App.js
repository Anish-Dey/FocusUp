import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {FocusHistory} from './src/features/FocusHistory';
import Constants from 'expo-constants';
import { color } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history = {history}/>
        </>
      ) : (
        <Timer 
          focusSubject={currentSubject}
          clearSubject={() => setCurrentSubject(null)}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: color.darkBlue,
  },
  text: {
    color: color.white,
  },
});
