import React from 'react';
import EditTaskModal from './EditTaskModal';
import { useNavigate } from 'react-router-dom';

export const Tasks = ({ tasks, deleteTask, taskEdited }) => {

    const navigate = useNavigate();

    console.log('task length::', tasks);
    if (tasks.length === 0) {
        return null;
    }

    const detail = (tasks) => {
        localStorage.setItem("task", JSON.stringify(tasks));
        navigate('/detail')
    };

    const TaskRow = (task, index) => {
        return (
            <tr onClick={() => detail(task)} key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{task.id}</td>
                <td>{task.task}</td>
                <td>{task.assignee}</td>
                <td>
                    <div className='row'>
                        <div className='col-md-6'>
                            {task.status}
                        </div>
                        <div className='col-md-3'>
                            <EditTaskModal task={task} taskEdited={taskEdited} />
                        </div>
                        <div className='col-md-3'>
                            <button type="button" onClick={(e) => deleteTask(task.id)} className='btn btn-danger right'>Delete</button>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }


    const taskTable = tasks.map((task, index) => TaskRow(task, index))

    return (
        <div className='container'>
            <h2>Tasks</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Task Id</th>
                        <th>Task Name</th>
                        <th>Assignee</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {taskTable}
                </tbody>
            </table>
        </div>
    )
}