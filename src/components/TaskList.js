import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

export default class TaskList extends Component {

    state = {
        task: []
    }

    async componentDidMount() {
        this.getTask();
    }

    getTask = async () => {
        const res = await axios.get('http://localhost:5000/api/task')
        this.setState({
            task: res.data.tareas
        });
    }

    deleteNote = async (taskId) => {
        await axios.delete('http://localhost:5000/api/task/' + taskId);
        this.getTask();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.task.map(task => (
                        <div className="col-md-4 p-2" key={task._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Prioridad: {task.prioridad}</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Responsable: {task.responsable}
                                    </p>
                                    <p>
                                        Titulo: {task.titulo}
                                    </p>
                                    <p>
                                        Descripción: {task.descripcion}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(task._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}