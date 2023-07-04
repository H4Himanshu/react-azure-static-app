import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header';
import { Tasks } from './Tasks';
import CreateTask from './CreateTask';
import { getAllTask, deleteTask, fetchSettings } from '../services/TodoService';

function Home() {

    const [task, setTasks] = useState([]);
    const [numberOfTasks, setNumberOfTasks] = useState([]);
    const [isTaskEdited, setTaskEdited] = useState([]);
    const [appSettings, setAppSettings] = useState([]);

    useEffect(() => {
        getAllTask().then(tasks => {
            console.log(tasks);
            setTasks(tasks);
        })
    }, [numberOfTasks, isTaskEdited])

    useEffect(() => {
        async function fetchData() {
            const response = await fetchSettings;
            setAppSettings(response);
        }

        fetchData();
    }, [])

    function delTask(taskId) {
        deleteTask(taskId).then(response => {
            console.log(response);
            setNumberOfTasks(response);
        })
    }

    function taskEdited(resp) {
        setTaskEdited(resp);
    }

    function taskCreated(resp) {
        setNumberOfTasks(numberOfTasks + 1);
    }

    return (
        <div className='App'>
            <Header appSettings={appSettings}></Header>
            <div className='container mrgnbtm'>
                <div className='row'>
                    <div className='col-md-12'>
                        <CreateTask taskCreated={taskCreated}></CreateTask>
                    </div>
                </div>
            </div>
            <div className='row mrgnbtm'>
                <Tasks tasks={task} deleteTask={delTask} taskEdited={taskEdited}></Tasks>
            </div>
        </div>
    )
};

export default Home;