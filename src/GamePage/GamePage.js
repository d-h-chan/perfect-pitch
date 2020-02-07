import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Context from '../ContextManagement/Context.js'
import ScoresApiService from '../services/score-api-service'
import {notes, gameLength, noteToIdMap, pianoVolume } from '../store.js';
import './GamePage.css';

class GamePage extends Component {

  static contextType = Context;

  constructor(props) {
    super(props);
    this.audioContext = new AudioContext();
    this.state = { isPlayButtonDisabled: false }
  }

  makeButton = (note) => {
    return (
      <button
        className="note"
        onClick={this.handleAnswerClick}
        id={noteToIdMap[note]}
        key={note}
        disabled={noteToIdMap[note] > this.context.difficulty.value}>
        {this.checkBlackKey(note)}
      </button>
    );
  }

  checkBlackKey = (note) => {
    if (note.includes("#")) {
      return "#/b"
    }
    return note
  }

  handleAnswerClick = (event) => {
    const note = event.target.id
    console.log(typeof(note))
    console.log(typeof(this.context.currentNote))
    if (this.context.currentNote.toString() === note) {
      this.context.incrementScore()
    }
    this.context.setCurrentNote(this.context.generateRandomNote())
    this.context.incrementProgress()
    this.playNote(note)
  }

  playNote = (note) => {
    let audio = new Audio(`/audio/${note}.mp3`);
    audio.volume = pianoVolume;
    audio.play();
  }

  handlePlayButtonClick = (event) => {
    this.playNote(this.context.currentNote)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let userName = event.target.userNameInput.value
    ScoresApiService.postScore(userName, this.context.score, this.context.difficulty.string)
      .then(() => {
        this.context.resetGame()
        this.props.history.push('/leaderboard')
      })
    //.catch(this.context.setError)
  }

  render() {
    return (
      <>
        <h2 className="gameHeader">Correct: {this.context.score}</h2>
        <br></br>
        {this.context.progress !== gameLength && (
          <>
            <h2 className="gameHeader">Progress: {this.context.progress}/{gameLength}</h2>
            <button
              id="playNoteButton"
              onClick={this.handlePlayButtonClick}
              disabled={this.state.isPlayButtonDisabled}>
              Play Sound
          </button>
            <div className="circle">
              {notes.map(this.makeButton)}
            </div>
          </>
        )}
        {this.context.progress === gameLength && (
          <>
            <form onSubmit={this.handleSubmit}>
              UserName
            <input id="userNameInput" name="userNameInput"></input>
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </>
    );
  }
}

export default withRouter(GamePage);