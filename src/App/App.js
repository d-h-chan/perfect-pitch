import React, { Component } from 'react';
import Context from '../ContextManagement/Context.js'
import { Route } from 'react-router-dom'
import InfoPage from '../InfoPage/InfoPage.js'
import GamePage from '../GamePage/GamePage.js'
import Leaderboard from '../Leaderboard/Leaderboard.js'
import { Link } from 'react-router-dom';
import { DifficultyEnum, idToFrequencyMap } from '../store.js';
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

  addScore = (score) => {
    let scores = this.state.scores.concat(score);
    this.setState({ scores })
  }

  setDifficulty = (difficulty) => {
    this.setState({difficulty})
  }

  generateRandomFrequency = () => {
    const num = Math.floor(Math.random() * this.state.difficulty.value) + 1;
    const frequency = idToFrequencyMap[num]
    return frequency
  }

  resetGame = () => {
    this.setState({progress: 0, score: 0, currentNote: this.generateRandomFrequency()})
  }

  state = {
    currentNote: 261.6256,
    setCurrentNote: this.setCurrentNote,
    progress: 0,
    incrementProgress: this.incrementProgress,
    score: 0,
    incrementScore: this.incrementScore,
    scores: [],
    //might not need addScore anymore
    addScore: this.addScore,
    difficulty: DifficultyEnum.EASY,
    setDifficulty: this.setDifficulty,
    generateRandomFrequency: this.generateRandomFrequency,
    resetGame: this.resetGame,
    setScores: this.setScores
  };

  render() {
    return (
      <main className='App'>
        <Context.Provider value={this.state}>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/leaderboard/">Leaderboard</Link> |
            <Link to="/game/">Game</Link>
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