import { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"

function GoalInput(props) {
    const { onAddGoal, onCancel, modalVisible } = props

    const [enteredGoalText, setEnteredGoalText] = useState('')
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={modalVisible} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Add your goals'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal'
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    textInput: {
        // borderWidth: 1,
        borderColor: '#f0e7fa',
        width: '70%',
        marginRight: 8,
        padding: 8,
        backgroundColor: '#f0e7fa'
    },
      inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: '#8121eb'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    button: {
        width: 100,
        marginHorizontal: 20
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})