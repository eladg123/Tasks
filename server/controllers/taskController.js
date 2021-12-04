const express = require('express')
const router = express.Router();
const tasksBL = require('../models/tasksBL')



///get all
router.route('/').get(async (req, resp) => {
    let data = await tasksBL.getAllTasks();
    return resp.json(data);
})

//get by id
router.route('/:id').get(async (req, resp) => {
    let id = req.params.id;
    let data = await tasksBL.getTaskById(id);
    return resp.json(data);
})

/// create task
router.route('/').post(async (req, resp) => {
    let newTask = req.body;
    let data = await tasksBL.createTask(newTask);
    return resp.json(data);
})


//update task
router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let taskToUpdate = req.body;
    console.log(taskToUpdate);
    let status = await tasksBL.updateTask(id, taskToUpdate);
    return resp.json(status);
})

/// delete task
router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await tasksBL.deleteTask(id);
    return resp.json(status);
})


module.exports = router;