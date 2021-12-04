import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import APIKit from '../api/APIKit';


const Task = (props) => {
    const [complete, setComplete] = useState(props.task.done);

    const completeTask = async () => {
        try {
            let updatedTask = { _id: props.task._id, desc: props.task.desc, done: true }
            await APIKit.put(`api/tasks/${props.task._id}`, updatedTask);
            setComplete(true)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>

            </View>
            <Text style={styles.itemText}>{props.task.desc}</Text>
            <View style={styles.completeContainer}>
                {complete ? <Text style={{ color: 'green' }}>Done </Text> : <Button title="Mark as completed" onPress={() => completeTask()} />}
            </View>
        </View >)
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText: {
        maxWidth: '80%',
    },
    completeContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },


});
export default Task;