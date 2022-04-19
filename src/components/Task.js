import React from 'react';
import PropTypes from 'prop-types'
import './Task.css'

class Task extends React.Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'grey' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const { task } = this.props;
        return <div className='tareascontainer' style={this.StyleCompleted()}>
            <div className='tareastextbox'>
                <div> Titulo: {task.title} </div>
                <div>Descripcion: {task.description} </div>
                <div>{task.done}</div>
                <div>ID: {task.id} </div>
            </div>
            <input className='checkbox' type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            <button style={btnDelete}
                onClick={this.props.deleteTask.bind(this, task.id)}

            >
                x
            </button>
        </div>
    }
}

/* PropTypes
Son como los modelos de Sequelize, se asegura que el dato recibido sea el esperado */
Task.propTypes = {
    task: PropTypes.array.isRequired
}

/* Usar estilos en linea pasando una var
Se escribe la var, se la pasa sobre la etiqueta 

 <button style={btnDelete}> */
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%'
}



export default Task

