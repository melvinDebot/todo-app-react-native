import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';

//Import components
import Header from './src/components/_Shared/Header'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? 25 : 0,
    paddingLeft: 20,
    paddingRight : 20
  },
});
