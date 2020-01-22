import React, { Component } from 'react';
import AnswerButtons from '../AnswerButtons/AnswerButtons.js';
import Context from '../ContextManagement/Context.js'
import { idToFrequencyMap, frequencyToNoteMap, noteToFrequencyMap } from '../store.js';

class GamePage extends Component {

  static contextType = Context;

  constructor(props) {
    super(props);
    this.audioContext = new AudioContext();
  }

  playNote = (frequency) => {
    let oscillator = this.audioContext.createOscillator();
    oscillator.connect(this.audioContext.destination);
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime); // value in hertz
    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 1.5)
  }

  handleClick = () => {
    //let num = Math.floor(Math.random() * 11) + 1;
    //let frequency = idToFrequencyMap[num]
    //this.context.setCurrentNote(num);
    //console.log(frequency)

    //this.playNote(frequency);
    this.playNote(this.context.currentNote)
  }

  generateRandomNote = () => {
    const num = Math.floor(Math.random() * 11) + 1;
    const frequency = idToFrequencyMap[num]
    console.log(frequency)
    return frequency
  }

  render() {
    return (
      <>
        <h1>Game Screen</h1>
        <button onClick={this.handleClick}>Play Sound</button>
        <br></br>
        <AnswerButtons></AnswerButtons>
        <br></br>
        <Context.Consumer>
          {({ currentNote, setCurrentNote }) => (
            <button onClick={() => setCurrentNote(this.generateRandomNote())}>
              Switch Note (Current: {currentNote})
          </button>
          )}
        </Context.Consumer>

      </>
    );
  }
}

export default GamePage;