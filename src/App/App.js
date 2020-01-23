import React, { Component } from 'react';
import Context from '../ContextManagement/Context.js'
import GamePage from '../GamePage/GamePage.js'

class App extends Component {

  setCurrentNote = currentNote => {
    this.setState({ currentNote });
  };

  incrementProgress = () => {
    this.setState({progress: this.state.progress + 1})
  }

  incrementScore = () => {
    this.setState({score: this.state.score +1})
  }

  state = {
    currentNote: 440,
    setCurrentNote: this.setCurrentNote,
    progress: 1,
    incrementProgress: this.incrementProgress,
    score: 0,
    incrementScore: this.incrementScore
  };

  render() {
    return (
      <main className='App'>
        <Context.Provider value={this.state}>
          <h1>PERFECT PITCH</h1>
          <GamePage></GamePage>
        </Context.Provider>
      </main>
    );
  }
}

export default App;