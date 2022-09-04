import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput(props) {
    const { onAddGoal } = props

    const [enteredGoalText, setEnteredGoalText] = useState('')
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder='Add your goals'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button 
                title='Add Goal'
                onPress={addGoalHandler}
            />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
      inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
})