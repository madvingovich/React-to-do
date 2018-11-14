import React from 'react';
import AddTask from '../AddNewTaskForm';
import TasksList from '../TasksList';
import './board.css';

function Board () {
    return (
        <div className='board'>
            <div className="board-header">
                <AddTask/>
                <h2>My Fucking To-Do List</h2>
            </div>
            <TasksList/>
        </div>
    )
}

export default Board;