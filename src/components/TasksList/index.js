import React, {Component} from 'react';
import {connect} from 'react-redux';
import Task from '../Task';
import './tasksList.css';

function TasksList(props) {
    const taskList = props.tasks.map(task => <li key = {task.id}><Task task = {task}/></li>)
    return (
        <ul className='task-list'>
            {taskList}
        </ul>
    )
}

export default connect(({tasks}) => ({
    tasks
}))(TasksList);