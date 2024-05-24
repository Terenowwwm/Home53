import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './assets/Components/AddTaskForm';
import Task from './assets/Components/Task';


function App() {
    const [tasks, setTasks] = useState([
        { id: '1', text: 'Привет, как дела ?' },
        { id: '2', text: 'Привет, хорошо' }
    ]);
    const [newTasks, setNewTask] = useState('');

    const change = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    }
    const addFunction = () =>{
        const tasksCopy = [...tasks];
        const task = {id: Date.now().toString(), text: newTasks };
        tasksCopy.push(task);
        console.log(tasksCopy);
        setTasks(tasksCopy);
    }
    return (
        <>
            <AddTaskForm addText={() => addFunction()} onAdd={(event) =>change(event)} />
            {tasks.map((task) => (
                <Task key={task.id} text={task.text}/>
            ))}
        </>
    );
}

export default App;
