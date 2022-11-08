import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Task from '../components/Task'

const HomeScreen = () => {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let tempTaskItems = [...taskItems]
    tempTaskItems.splice(index, 1)
    setTaskItems(tempTaskItems)
  }

  

  return (
    <View style={styles.container}>

      {/* task list */}
      <View>
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })
        }
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.taskInputWrapper}
      >
        <TextInput style={styles.input} placeholder="Write new.." value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity
          onPress={handleAddTask}
        >
          <View>
            <Text style={styles.addBtn}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskInputWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 30,
    height: 45,
    paddingHorizontal: 15,

  },
  addBtn: {
    backgroundColor: '#FFF',
    fontSize: 25,
    width: 45,
    height: 45,
    textAlign: 'center',
    borderRadius: 30,
    padding: 5,
    justifyContent: 'center'
  },
})