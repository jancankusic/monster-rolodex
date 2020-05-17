import React from 'react';
import { Component } from 'react'; 
import './App.css';
import { CardList } from './components/card-list/card-list.component'

export default class App extends Component {
  constructor() {
    super(); 
    this.state = {
       monsters: []
    }
  }

  componentDidMount() {
    const loadData = json => this.setState({ monsters: json}) 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(loadData)
  }

  searchMonsters (searchInput) => {

  }

  render() {
    return(
      <div className='app'>
        <Search serachMonsters={this.searchMonsters} />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    )
  }
}


