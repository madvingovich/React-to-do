import {ADD_TASK, REMOVE_TASK, MAKE_TASK_DONE} from '../constants';

const defaultTasks = [
    {
        title: "Make To-Do list on React",
        done: true,
        id: 'kek123456'
    },
    {
        title: 'Fuck this world',
        done: false,
        id: 'kek123'
    },
    {
        title: 'Катнуть в дотку',
        done: false,
        id: 'kek-4eburek'
    }
];

export default (tasks = defaultTasks, action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case ADD_TASK: {
            return tasks.concat({title: payload.title, done: false, id: randomId})
        }

        case REMOVE_TASK: {
            return tasks.filter(task => {
                return task.id !== payload.id
            })
        }
        
        case MAKE_TASK_DONE: {
            return tasks.map(task => {
                if(task.id === payload.id) return {...task, done: true};
                return task;
            });
        }
    }

    return tasks;
};
