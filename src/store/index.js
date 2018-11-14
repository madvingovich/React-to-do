import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import randomId from "../middlewares/randomId";

const enhancer = applyMiddleware(randomId);

const store = createStore(reducer, {}, enhancer);

export default store;