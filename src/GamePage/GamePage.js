import React, { Component } from 'react';
import Context from '../ContextManagement/Context.js'
import { idToFrequencyMap, noteToFrequencyMap, notes } from '../store.js';

class GamePage extends Component {

  static contextType = Context;

  constructor(props) {
    super(props);
    this.audioContext = new AudioContext();
  }

  makeButton = (note) => {
    return (
      <button onClick={this.handleAnswerClick} id={note}>
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
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime); // value in hertz
    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 1.5)
  }

  handlePlayButtonClick = (event) => {
    this.playNote(this.context.currentNote)
  }

  generateRandomNote = () => {
    const num = Math.floor(Math.random() * 11) + 1;
    const frequency = idToFrequencyMap[num]
    return frequency
  }

  handleNextButtonClick = (event) => {
    this.context.setCurrentNote(this.generateRandomNote())
    this.context.incrementProgress()
  }

  render() {
    return (
      <>
        <h2>Progress: {this.context.progress}/20</h2>
        <h2>Correct: {this.context.score}/20</h2>
        <button id="playNoteButton" onClick={this.handlePlayButtonClick}>Play Sound</button>
        <br></br>
        {notes.map(this.makeButton)}
        <br></br>
        <button id="nextButton" onClick={this.handleNextButtonClick}>
          Switch Note
        </button>

      </>
    );
  }
}

export default GamePage;