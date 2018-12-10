import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import './styles/init.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Dashboard />
            </div>
        );
    }
}

export default App;