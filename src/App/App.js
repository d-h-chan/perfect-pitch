import React, { Component } from 'react';
import Context from '../ContextManagement/Context.js'
import { Route } from 'react-router-dom'
import InfoPage from '../InfoPage/InfoPage.js'
import GamePage from '../GamePage/GamePage.js'
import Leaderboard from '../Leaderboard/Leaderboard.js'
import { Link } from 'react-router-dom';
import { DifficultyEnum } from '../store.js';
import './App.css';

class App extends Component {

  setCurrentNote = currentNote => {
    this.setState({ currentNote });
  };

  incrementProgress = () => {
    this.setState({ progress: this.state.progress + 1 })
  }

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 })
  }

  setScores = (scores) => {
    this.setState({ scores })
  }

  setDifficulty = (difficulty) => {
    this.setState({difficulty})
  }

  generateRandomNote = () => {
    const note = Math.floor(Math.random() * this.state.difficulty.value) + 1;
    return note
  }

  resetGame = () => {
    this.setState({progress: 0, score: 0, currentNote: this.generateRandomNote()})
  }

  state = {
    currentNote: 1,
    setCurrentNote: this.setCurrentNote,
    progress: 0,
    incrementProgress: this.incrementProgress,
    score: 0,
    incrementScore: this.incrementScore,
    scores: [],
    difficulty: DifficultyEnum.EASY,
    setDifficulty: this.setDifficulty,
    generateRandomNote: this.generateRandomNote,
    resetGame: this.resetGame,
    setScores: this.setScores
  };

  render() {
    return (
      <main className='App'>
        <Context.Provider value={this.state}>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/game/">Game</Link> | 
            <Link to="/leaderboard/">Leaderboard</Link>

          </nav>
          <Route exact path='/leaderboard' component={Leaderboard} />
          <Route exact path='/game' component={GamePage} />
          <Route exact path='/' component={InfoPage} />
        </Context.Provider>
      </main>
    );
  }
}

export default App;