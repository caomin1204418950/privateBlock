import React, { Component } from 'react';
import Tabar from '../tabar/Tabar'

class Notes extends Component{

    render () {
    
        // var data = require('../data/users.json');
        // console.log(data.users);
        // var userData=data.users;
        return(
            
            <div>
                <div className="Noteslist">
                    <div className="title">rem用法</div>
                    
                </div>
                <Tabar/>
            </div>
            
        )
        
        
    }
}
export default Notes;
