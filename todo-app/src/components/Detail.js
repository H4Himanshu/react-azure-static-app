import React from 'react';
import Container from 'react-bootstrap/Container';

const Detail = () => {
    const task = JSON.parse(localStorage.getItem("task"));

    return (
        <div class="container-fluid bg-light text-dark p-5">
            <div class="container bg-light p-5">
                <h1>Task Detail</h1>
                <p>
                    <b>Task</b>: {task.task}
                </p>
                <p>
                    <b>Assignee: </b> {task.assignee}
                </p>
                <p>
                    <b>Status: </b> {task.status}
                </p>
            </div>
        </div>
    )
}

export default Detail