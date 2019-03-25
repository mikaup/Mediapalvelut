import React, { Component } from 'react';
import './App.css';
import Table from "./components/table";




class App extends Component {
    state = {
        picArray: []
    };

    componentDidMount() {
        fetch('test.json')
            .then( (response) => {
                return response.json();
            })
            .then( (result) => {
                console.log(result);
                this.setState({picArray: result});
            });
    }

    render(){
        return (
            <div className="container">
                <Table picarray={this.state.picArray}/>
            </div>
        );

    }
}

export default App;