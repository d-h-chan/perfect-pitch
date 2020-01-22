import React, { Component } from 'react';
import Context from '../ContextManagement/Context.js'
import GamePage from '../GamePage/GamePage.js'

class App extends Component {

  setCurrentNote = currentNote => {
    this.setState({ currentNote });
  };

  state = {
    currentNote: 440,
    setCurrentNote: this.setCurrentNote
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