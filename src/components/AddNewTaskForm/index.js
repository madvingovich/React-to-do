import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {addTask} from '../../AC';
import {connect} from 'react-redux';
import './addNewTask.css';

class AddNewTask extends Component {
    static propTypes = {

    };

    getDefaultState = () => ({
        isOpen: false,
        titleInput: '',
    });

    state = this.getDefaultState();

    render() {
        return (
            <div className='add-task-wrapper'>
                <div className={this.getWrapperClass()}>
                    <button className = 'add-task-btn' onClick={this.toggleOpen}>ADD NEW TASK</button>

                    <form className={this.getInputsClass()} onSubmit={this.handleSubmit}>
                        <input type="text"
                               value={this.state.titleInput}
                               onChange={this.handleInputState('titleInput')}
                               placeholder='Title... (more than 3 symbols)'
                        />
                        <button type='submit'>Ok</button>
                        <div className="close-form" onClick={this.toggleOpen}></div>
                    </form>
                </div>
            </div>
        )
    }


    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getWrapperClass = () => {
        return this.state.isOpen ? 'add-task add-task-active' : 'add-task add-task-disables'
    };
    
    getInputsClass = () => {
        return this.state.isOpen ? 'inputs inputs-active' : ' inputs inputs-disabled';
    };

    handleInputState = (inputState) => ev => {
        this.setState({
            [inputState]: ev.target.value
        })
    };

    handleSubmit = ev => {
        ev.preventDefault();
        if(!this.state.titleInput.match(/((\S)(\s+)?){3}/gi)) return;
        this.props.addTask(this.state.titleInput);
        this.setState(this.getDefaultState())
    };
}

export default connect(null, { addTask })(AddNewTask);