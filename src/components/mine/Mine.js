import React, { Component } from 'react';
import Tabar from '../tabar/Tabar'
import {NavLink} from 'react-router-dom'
import './Mine.css';

class Mine extends Component{

    render () {
        return (
            <div className="MineContainer">
                <NavLink to="/writenotes">
                    <div className="writeNotes">
                        写日记
                    </div>
                </NavLink>
                
                <NavLink to="/mynotes">
                    <div className="myNotes">
                        我的日记
                    </div>
                </NavLink>
                <NavLink to="/logindesign">
                    <div className="LoginDesign">
                        登录/注册
                    </div>
                </NavLink>
                
                
                
                <Tabar/>
            </div>
        )
    }
}
export default Mine;
