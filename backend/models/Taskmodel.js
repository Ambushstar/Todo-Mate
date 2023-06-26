const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: String,
  taskCategory: String,
  taskDesc: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
