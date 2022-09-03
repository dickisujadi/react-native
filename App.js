import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={{backgroundColor: 'red', ...styles.itemContainer}}>
        <Text>1</Text>
      </View>
      <View style={{backgroundColor: 'blue', ...styles.itemContainer}}>
        <Text>2</Text>
      </View>

      <View style={{backgroundColor: 'green', ...styles.itemContainer}}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: 'row',
    width: '80%',
    height: 300,
    justifyContent: 'space-between',
    // alignItems: 'center' //this makes 'height' ignored (kind-of)
    alignItems: 'stretch'
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // width:  100,
    // height: 100
  }
});
