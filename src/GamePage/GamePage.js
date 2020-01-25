import React, { Component } from 'react';
import Context from '../ContextManagement/Context.js'
import { idToFrequencyMap, noteToFrequencyMap, notes, audioDuration, gameLength, noteToIdMap} from '../store.js';

class GamePage extends Component {

  static contextType = Context;

  constructor(props) {
    super(props);
    this.audioContext = new AudioContext();
  }

  makeButton = (note) => {
    return (
      <button 
      onClick={this.handleAnswerClick} 
      id={noteToIdMap[note]} 
      key={note}
      disabled={noteToIdMap[note] > this.context.difficulty}>
        {note}
      </button>
    );
  }

  handleAnswerClick = (event) => {
    const note = event.target.id
    if (this.context.currentNote === noteToFrequencyMap[note]) {
      this.context.incrementScore()
    }
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
  }

  generateRandomNote = () => {
    const num = Math.floor(Math.random() * this.context.difficulty) + 1;
    console.log(num)
    const frequency = idToFrequencyMap[num]
    console.log(frequency)

    return frequency
  }

  handleNextButtonClick = () => {
    this.context.setCurrentNote(this.generateRandomNote())
    this.context.incrementProgress()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let userName = event.target.userNameInput.value
    this.context.addScore(
      {user: userName, score: this.context.score}
    )
  }

  render() {
    return (
      <>
        <h2>Correct: {this.context.score}/{gameLength}</h2>
        {this.context.progress !== gameLength && (
        <>
          <h2>Progress: {this.context.progress}/{gameLength}</h2>
          <button id="playNoteButton" onClick={this.handlePlayButtonClick}>Play Sound</button>
          <br></br>
          {notes.map(this.makeButton)}
          <br></br>
          <button id="nextButton" onClick={this.handleNextButtonClick}>
            Switch Note
          </button>
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

export default GamePage;