const Task = require('./taskModel')


///get all
const getAllTasks = () => {
    return new Promise((resolve, reject) => {
        Task.find({}, (err, data) => {
            if (err) { reject(err) }
            else { resolve(data) }
        })
    })
}


///get by id
const getTaskById = (id) => {
    return new Promise((resolve, reject) => {
        Task.findById(id, (err, data) => {
            if (err) { reject(err) }
            else { resolve(data) }
        })
    })
}


//add task
const createTask = (newTask) => {
    return new Promise((resolve, reject) => {
        let taskToCreate = new Task({
            desc: newTask.desc,
            done: false
        });
        taskToCreate.save((err) => {
            if (err) { reject(err) }
            else { resolve(taskToCreate) }
        })
    })
}

///update task
const updateTask = (taskId, taskToUpdate) => {
    return new Promise((resolve, reject) => {
        Task.findByIdAndUpdate(taskId, {
            desc: taskToUpdate.desc,
            done: taskToUpdate.done

        }, err => {
            if (err) { reject(err) }
            else { resolve(taskToUpdate) }
        })
    })
}

/// delete task
const deleteTask = (taskId) => {
    return new Promise((resolve, reject) => {
        Task.findByIdAndDelete(taskId, err => {
            if (err) { reject(err) }
            else { resolve("Task Deleted") }
        })
    })
}


module.exports = { getAllTasks, getTaskById, createTask, deleteTask, updateTask }