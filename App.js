import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputsSectionAndTodoList from './Fragments/InputsSectionAndTodoList';
// DropDownPicker.setListMode('MODAL');

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.appBody}>
        <Text style={styles.appTitle}>Todo app</Text>
        <InputsSectionAndTodoList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    // Set content's vertical alignment.
    verticalAlign: 'top',
    paddingTop: 30,

    // Set content's horizontal alignment.
    alignItems: 'center',

    // Set hex color code here.
    backgroundColor: '#069A8E',
  },
  appBody: {flex: 1},
  appTitle: {
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
    paddingBottom: 6,
  },
});

export default App;
