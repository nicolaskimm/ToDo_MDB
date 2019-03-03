import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
    }
  }

  addTask(){
    const newTask = {
      id: this.state.tasks.length + 1,
      text: `Task number # ${this.state.tasks.length + 1}`
    }

    const newArray = [...this.state.tasks, newTask];
    this.setState({
      tasks: newArray,
    });
  }

  removeLastTask() {
    const newArray = this.state.tasks.filter(todo => todo.id < this.state.tasks.length);
    this.setState({tasks: newArray});
  }

  clearAllTasks(){
    this.setState({tasks: []})
  }

  render() {
    return (
      <div className='task-board'>
        <h1 className='task-board_title'>ToDo Board</h1>
        <div className='task-board_buttonSection'>
          <button onClick={this.addTask.bind(this)}>add</button>
          <button onClick={this.removeLastTask.bind(this)}>remove</button>
          <button onClick={this.clearAllTasks.bind(this)}>clear</button>
        </div>
        <ul className='task-board_list'>
          <TodoList taskArray={this.state.tasks} />
        </ul>
      </div>
    );
  }
}

export default App;
