import React from 'react';
import './style.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

class TodoItem extends React.Component{

    render(){
    
        const { todo } = this.props;

        return(
            <div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}>
                <Paper elevation={0} />
                {todo.text}
                <Divider />
            </div>
        )
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }

}

export default TodoItem;