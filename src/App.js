import React, { Component } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import tasks from './sample/tasks.json'
import TaskForm from './components/TaskForm';
import Post from './components/Post';
import { Link, BrowserRouter } from 'react-router-dom'

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: newTasks })
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({ tasks: newTasks })
  }

  render() {
    return <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/post'>Posts</Link>
      <TaskForm addTask={this.addTask} />
      <Tasks
        tasks={this.state.tasks}
        deleteTask={this.deleteTask}
        key={tasks.id}
        checkDone={this.checkDone}
      />
      <Post />

    </BrowserRouter>
  }
}

export default App;

