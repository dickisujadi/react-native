import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Add your goals'
          onChangeText={goalInputHandler}
        />
        <Button 
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        {/* <Text>List of Goals ...</Text> */}
        {courseGoals && courseGoals.length ? courseGoals.map((goal, index) => 
          <Text style={styles.goalItem} key={index}>{goal}</Text>) : 
          <Text key={`empty`}>List of Goals</Text>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    color: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});
