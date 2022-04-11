import './App.css';
import Tasks from './components/Tasks';
import React, { Component } from 'react';
import tasks from './sample/tasks.json'

class App extends Component{

  state = {
    tasks: tasks
  }

  render(){
    return <div>
     <Tasks
     tasks={this.state.tasks}
     />
    </div>
  }
}

export default App;

