import { Component } from 'react'
/* Recibe las entradas del usuario, solo sirve para recolectar los datos del input */
export default class TaskForm extends Component{
    
    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
       return(
           <form onSubmit={this.onSubmit}>
               <input 
                onChange={this.onChange}
                value={this.state.title} 
                type="text" 
                name='title'
                placeholder='Escribe una tarea'/>
                <br/>
                <br/>
               <textarea 
               name='description'
                onChange={this.onChange}
                value={this.state.description} 
                placeholder='Escribe tu nota'>  </textarea>
                <button type='submit'>
                    Guardar tarea
                </button>
           </form>
       ) 
    }
}