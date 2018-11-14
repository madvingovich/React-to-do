import React from 'react';
import PropTypes from 'prop-types';
import {makeTaskDone, removeTask} from '../../AC';
import {connect} from 'react-redux';
import './task.css';

function Task (props) {
    const {task} = props;
    return (
        <div className='task'>
            <p>{task.title}</p>
            <div className='done'>
                {task.done ? <img src='img/done.png' alt=""/> : <button className='done-btn' onClick={props.makeTaskDone.bind(null, task.id)}>Done!</button>}
                <div className="remove-task" onClick={props.removeTask.bind(null, task.id)}><span className='remove-task-x'>X</span></div>
            </div>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
};
export default connect(null, { makeTaskDone, removeTask })(Task);