import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Notes from './components/notes/Notes'
import Mine from './components/mine/Mine'
import MNotes from './components/mnotes/MNotes'
import WNotes from './components/wnotes/WNotes'
import LoginDesign from './components/logindesign/LoginDesign'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/mine" component={Mine}/>
            <Route path="/notes" component={Notes}/>
            <Route path="/writenotes" component={WNotes}/>
            <Route path="/mynotes" component={MNotes}/>
            <Route path="/logindesign" component={LoginDesign}/>
        </div>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
