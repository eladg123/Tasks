import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task.js'
import APIKit from './api/APIKit.js';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null)
  }
  const getTasks = async () => {
    try {
      const response = await APIKit.get('api/tasks/');
      setTaskItems(response.data)
    } catch (error) {
      console.log(error.response.status)
    }
  }
  const createTask = async () => {
    try {
      await APIKit.post('api/tasks/', { desc: task, done: false });
      setTask('')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasks()
  }, [task])






  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >


        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My tasks</Text>
          <View style={styles.items}>

            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index}  >
                    <Task task={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

      </ScrollView>


      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a new task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => createTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: 'blue',
    borderWidth: 1
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: "center"
  },
  addText: {}
});

