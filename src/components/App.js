import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Jason" ,
        score: 0,
        id: 1
      },
      {
        name: "Mason" ,
        score: 0,
        id: 2
      },
      {
        name: "Nason" ,
        score: 0,
        id: 3
      },
      {
        name: "Grayson" ,
        score: 0,
        id: 4
      },
       {
        name: "Kaison" ,
        score: 0,
        id: 5
      }
    ],
    title: 'Fooking Title'
  };

  // tracking player ID
  prevPlayerId = 5;


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));

  }

  // Fucntion below adds new Players
  // Need to bring in previous Players object from App State and combine them with new Player object
  // Below example uses spread opperator    
  
/*
  - BEST PRACTICE TO UPDATE TO A NEW STATE USING PREVIOUS STATE TO ENSURE YOU ARE USING THE MOST UP TO DATE "STATE"
    - EX: state sometimes gets upated in batches and this might cause a delay in updating state 

  handleAddNewPlayer = (name) => {
    this.setState({
      players: [ 
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })
  }
*/

  handleAddNewPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [ 
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title={this.state.title} 
          players={this.state.players}
        />
        {/* Players list 
            map() has an optional buitl-in "index" parameter 
          */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            score={player.score}
            changeScore={this.handleScoreChange}
            index={index}   
          />
        )}
          <AddPlayerForm 
            addPlayer={this.handleAddNewPlayer}
          />

      </div>
    );
  }
}

export default App;