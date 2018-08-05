import React, { Component } from 'react';
import Tabar from './components/tabar/Tabar'

import Notes from './components/notes/Notes'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <div>
            <Notes/>
          </div>
          <div>
            <Tabar/>
          </div>
        </div>
       
      
    )
  }
}

export default App;
