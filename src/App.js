import React from 'react';
import TodoList from './TodoList/todolist'
import AddTodo from './AddTodo/addtodo'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos:[]
    };
  }
  
  render() {
    return(
    <div className='container justify-content-center'>
      <h1>Todos</h1>
      <Card>
      <AddTodo addTodoFn={this.addTodo}></AddTodo>
      <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos}></TodoList>
      </Card>
    </div>
    )
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todo');
    if(todos){
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos});
    } else {
      console.log('no todos');
    }
  }

 addTodo = async (todo) => {
  await this.setState({ todos: [...this.state.todos, {
    text: todo,
    completed: false
  }] });
  localStorage.setItem('todos', JSON.stringify(this.state.todos));
  console.log(localStorage.getItem('todos'));
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if(todo === _todo)
      return {
        text: todo.text,
        completed: !todo.completed
      }
      else
        return _todo
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

}

export default App;
