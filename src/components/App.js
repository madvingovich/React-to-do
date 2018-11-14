import React from 'react';
import Board from './Board';
import store from '../store';
import {Provider} from 'react-redux';
import '../normalize.css';


function App () {
    return (
        <Provider store = {store}>
            <Board/>
        </Provider>
    )
}
App.propTypes = {

};
export default App;