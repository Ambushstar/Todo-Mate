import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './Main.css';
const TaskManager = () => {
  return (
    <div className="task-manager">
      <div className="add-task-section">
        <AddTask />
      </div>
      <div className="task-list-section">
        <TaskList />
      </div>
    </div>
  );
};

export default TaskManager;
