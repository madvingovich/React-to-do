export default store => next => action => {
    if(!action.generateId) return next(action);

    const randomId = Date.now() + Math.random();

    return next({...action, randomId: randomId});
};