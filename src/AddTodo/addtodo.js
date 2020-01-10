import React from 'react';
import './todostyles.css';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';



class AddTodo extends React.Component{
    

    constructor(){
        super();
        this.state = {
            todo: ''
        };
    }

    render() {
        return(
        <div className='addTodoContainer'>
            <form onSubmit={(e) => this.submitTodo(e)}>
                <Input className='form-control' placeholder='todo Here' id='addTodoInput' onChange={(e) => this.updateInput(e)} type='text'></Input>
                <Button variant="contained" color="primary" type='submit'>Add Todo</Button>
                <Divider light />
            </form>
        </div>
        );
    }
    updateInput = (e) => {
      this.setState({ todo: e.target.value });
    }
    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo);
        document.getElementById('addTodoInput').value = '';
    }


}


export default AddTodo;