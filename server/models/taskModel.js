const mongoose = require('mongoose')


/// create user schema
let taskSchema = new mongoose.Schema({
    desc: String,
    done: Boolean
})


module.exports = mongoose.model('tasks', taskSchema);