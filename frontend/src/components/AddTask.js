import React from 'react';
import './AddTask.css';
import { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const newTask = {
        taskName,
        taskCategory,
        taskDesc,
        taskDate: currentDate, // Include the current date in the task object
      };
    axios
      .post('http://localhost:4000/add', newTask)
      .then(() => {
        // alert('Your Task is added');
        window.location.reload()
        setTaskName('');
        setTaskCategory('');
        setTaskDesc('');
      })
      .catch((error) => {
        console.error('Unable to add task:', error);
      });
  };

  return (
    <div className='taskform'>
    <h2>
      Add Task
    </h2>
      <form action='' method='post' onSubmit={handleSubmit}>
        <div className='taskname'>
          <span>Task Name</span>
          <input type='text' value={taskName} onChange={(e) => setTaskName(e.target.value)} required/>
        </div>
        <div className='taskcategory'>
          <span>Category</span>
          <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)} required>
            <option value='' default disabled>--Select--</option>
            <option value='Urgent'>Urgent</option>
            <option value='Important'>Important</option>
            <option value='Personal'>Personal</option>
            <option value='Work'>Work</option>
            <option value='Misc'>Miscellaneous</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div className='taskdesc'>
          <span>Description</span>
          <textarea type='text' rows='6' cols='10' value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)} required />
        </div>
        <div className='taskbtn'>
          <button type='submit' id='addtaskbtn'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
