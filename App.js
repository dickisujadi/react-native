import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  function modalVisible(params) {
    setIsModalVisible(true)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => 
      [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]
    )
    closeModal()
  }

  function deleteItemHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter(goal => goal.id !== id)
    })
  }

  function cancelGoal() {
    closeModal()
  }

  function closeModal(params) {
    setIsModalVisible(false)
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add Goals' color={'#5e0acc'} onPress={modalVisible} />
      <GoalInput modalVisible={isModalVisible} onAddGoal={addGoalHandler} onCancel={cancelGoal}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(dataItem) => {
            return <GoalItem id={dataItem.item.id} text={dataItem.item.text} onDeleteItem={deleteItemHandler}/>
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
    paddingHorizontal: 16,
  },
  
  goalsContainer: {
    flex: 5
  }
});
