import React from 'react';
import { Component } from 'react'; 
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import Search from './components/Search/search.components'

export default class App extends Component {
  constructor() {
    super(); 
    this.state = {
       monsters: [],
       renderedMonsters: []
    }
  }

  componentDidMount() {
    const loadRenderedMonsters = () => {this.setState({ renderedMonsters: this.state.monsters})};
    const loadData = json => this.setState({ monsters: json}); 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(loadData).then(loadRenderedMonsters);
  }

 searchMonsters = e => {
  this.setState({ renderedMonsters: this.state.monsters.filter(monster => monster.name.toLowerCase().includes(e.target.value.toLowerCase()))})
}
  thisFunction() {
    console.log(this); 
  }

  render() {
    return(
      <div className='App'>
        <h1>Monsters Roladex</h1>
        <br></br>
        <Search 
          handleChange={this.searchMonsters} 
          placeholder='search monsters'
        />
        <CardList monsters={this.state.renderedMonsters}></CardList>
      </div>
    )
  }
}


