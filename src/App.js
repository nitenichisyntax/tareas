import React, { Component, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import './components/Navigation';
import Navigation from './components/Navigation';
import Formulario from './components/Formulario';
import TaskList from './components/TaskList';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navigation titulo="Tareas"  />

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <Formulario onAddTarea={this.handleAddTarea} />
            </div>
            <div className="col-md-9">
              <div className="row">
                <TaskList />
              </div>
            </div>
          </div>
        </div>


        <header className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </header>


      </div>
    );
  }
}

export default App;