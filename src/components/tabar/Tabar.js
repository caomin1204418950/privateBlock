import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Tabar.css'
class Tabar extends Component{

clickedNotes () {
    console.log('notes')
}

clickedMine () {
    console.log('mine')
}

    render () {
        return (
            <div className="container" >
                <NavLink to="/notes" className="notes" onClick={()=>this.clickedNotes()} >
                    <div >
                        日记
                    </div>
                </NavLink>
                <NavLink to="/mine" className="mine" onClick={()=>this.clickedMine()} >
                    <div  >
                        我的
                    </div>
                </NavLink>
            </div>
        )
    }
}
export default Tabar;
