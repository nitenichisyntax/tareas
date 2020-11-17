import React, { Component } from 'react';
import axios from 'axios';

class Formulario extends Component {

    constructor() {
        super();
        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'Baja'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        const tareas = {
            titulo: this.state.titulo,
            responsable: this.state.responsable,
            descripcion: this.state.descripcion,
            prioridad: this.state.prioridad
        }
        axios.post('http://localhost:5000/api/task', tareas )
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        });
        console.log('Enviando información a las haitianas');
    }


    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="titulo"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Titulo" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsable"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Responsable" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="descripcion"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Descripción" />
                    </div>
                    <div className="form-group">
                        <select
                            name="prioridad"
                            onChange={this.handleInput}
                            className="form-control"
                            value={this.state.Prioridad}>
                            <option>Bajo</option>
                            <option>Medio</option>
                            <option>Alto</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }
}

export default Formulario;