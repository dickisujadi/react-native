import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState('')

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => 
    [...courseGoals, {text: enteredGoalText, id: Math.random().toString()}]
    )
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(dataItem) => {
            return <GoalItem text={dataItem.item.text}/>
          }}
          keyExtractor={(item, index) => {return item.id}}
          alwaysBounceVertical={false}
        />
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
  
  goalsContainer: {
    flex: 5
  }
});
