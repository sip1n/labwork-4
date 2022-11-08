import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.circle} ></TouchableOpacity>
      <Text style={styles.taskText}>{props.text}</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: 5,
    marginHorizontal: 10,

  },
  circle: {
    borderWidth: 3,
    borderColor: '#5c3',
    width: 25,
    height: 15,
    opacity: 1,
    marginRight: 10,
    borderRadius: 25,

  }
})