import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
    const { id, text } = props

    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#b8aed2'}} 
                onPress={props.onDeleteItem.bind(this, id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                    <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.2
    },
    goalText: {
      padding: 8,
      color: 'white'
    }
})