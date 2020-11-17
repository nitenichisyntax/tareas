import React, { Component } from 'react';
import { Tareas } from './Tareas.json';

class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            Tareas
        }
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    {this.props.titulo}
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.largo}
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navigation;