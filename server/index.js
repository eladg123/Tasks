const express = require('express')
const cors = require('cors')



//// import controllers
const tasksController = require('./controllers/taskController.js');


///connect to DB
require('./configs/tasksDB')

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//// use the controllers
app.use('/api/tasks', tasksController)


app.listen(8000, async () => {
    console.log("Server is running!")
})