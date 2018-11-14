import {ADD_TASK, REMOVE_TASK, MAKE_TASK_DONE} from '../constants';

export function addTask(title) {
    return {
        type: ADD_TASK,
        payload: { title },
        generateId: true
    }
}

export function removeTask(id) {
    return {
        type: REMOVE_TASK,
        payload: { id }
    }
}

export function makeTaskDone(id) {
    return {
        type: MAKE_TASK_DONE,
        payload: { id }
    }
}