import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Context from '../ContextManagement/Context.js'
import { idToFrequencyMap, notes, audioDuration, gameLength, noteToIdMap} from '../store.js';

class GamePage extends Component {

  static contextType = Context;

  constructor(props) {
    super(props);
    this.audioContext = new AudioContext();
    this.state = {isPlayButtonDisabled: false}
  }

  makeButton = (note) => {
    return (
      <button 
      onClick={this.handleAnswerClick} 
      id={noteToIdMap[note]} 
      key={note}
      disabled={noteToIdMap[note] > this.context.difficulty.value}>
        {note}
      </button>
    );
  }

  handleAnswerClick = (event) => {
    const note = event.target.id
    console.log(this.context.currentNote)
    console.log(note)
    console.log(idToFrequencyMap[note])
    if (this.context.currentNote === idToFrequencyMap[note]) {
      this.context.incrementScore()
    }
    this.context.setCurrentNote(this.context.generateRandomFrequency())
    this.context.incrementProgress()
  }

  playNote = (frequency) => {
    let oscillator = this.audioContext.createOscillator();
    oscillator.connect(this.audioContext.destination);
    console.log(frequency)
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime); // value in hertz
    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + audioDuration)
  }

  handlePlayButtonClick = (event) => {
    this.playNote(this.context.currentNote)
    this.setState({
      isPlayButtonDisabled: true
    });
    setTimeout(() => this.setState({ isPlayButtonDisabled: false }), audioDuration * 1000);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let userName = event.target.userNameInput.value
    this.context.addScore(
      {user: userName, score: this.context.score}
    )
    this.context.resetGame()
    this.props.history.push('/leaderboard')
  }

  render() {
    return (
      <>
        <h2>Correct: {this.context.score}/{gameLength}</h2>
        {this.context.progress !== gameLength && (
        <>
          <h2>Progress: {this.context.progress}/{gameLength}</h2>
          <button 
            id="playNoteButton" 
            onClick={this.handlePlayButtonClick}
            disabled={this.state.isPlayButtonDisabled}>
            Play Sound
          </button>
          <br></br>
          {notes.map(this.makeButton)}
          <br></br>
        </>
        )}
        {this.context.progress === gameLength && (
          <form onSubmit={this.handleSubmit}>
            UserName
            <input id="userNameInput" name="userNameInput"></input>
            <button type="submit">Submit</button>
          </form>
        )}
      </>
    );
  }
}

export default withRouter(GamePage);