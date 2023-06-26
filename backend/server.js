const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskData = require('./models/Taskmodel');

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse the request body as JSON

mongoose.connect('mongodb://127.0.0.1/todo')
  .then(() => {
    console.log('Connected to Database');
  })
  .catch(() => {
    console.log('Failed to connect to the database');
  });

const port = 4000;
app.listen(port, () => {
  console.log('App listening on port', port);
});

app.post('/add', (req, res) => {
  const { taskName, taskCategory, taskDesc } = req.body;

  const newTaskData = new taskData({
    taskName,
    taskCategory,
    taskDesc
  });

  newTaskData.save()
    .then(() => {
      console.log('Task is saved to the database');
      res.sendStatus(200);
    })
    .catch(() => {
      console.log('Task failed to save');
      res.sendStatus(500);
    });
});


app.get('/tasks', (req, res) => {
    taskData.find()
      .then(tasks => {
        res.status(200).json(tasks);
      })
      .catch(error => {
        console.error('Unable to fetch tasks:', error);
        res.sendStatus(500);
      });
  });
  