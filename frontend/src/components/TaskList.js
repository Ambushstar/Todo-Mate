import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './TaskList.css'
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Unable to fetch tasks:', error);
      });
  }, []);

  return (
    <div className='fetchCard'>
      {tasks.map(task => (
        <Card
          key={task._id}
          taskName={task.taskName}
          taskCategory={task.taskCategory}
          taskDesc={task.taskDesc}
        />
      ))}
    </div>
  );
};

export default TaskList;
