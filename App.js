import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppContent from './src/Fragments/AppContent';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.appBody}>
        <Text style={styles.appTitle}>Todo app</Text>
        <AppContent />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#069A8E',
    flex: 1,
    paddingTop: 30,
    verticalAlign: 'top',
  },
  appBody: {flex: 1},
  appTitle: {
    color: 'black',
    fontFamily: 'Times New Roman',
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 6,
  },
});

export default App;
