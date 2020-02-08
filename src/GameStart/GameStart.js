import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Context from '../ContextManagement/Context.js'
import {DifficultyEnum} from '../store.js'
import './GameStart.css';

class GameStart extends Component {

  static contextType = Context;

  handleSubmit = (event) => {
    event.preventDefault()
    //set score and progress to base values
    this.context.resetGame()
    this.props.history.push('/game')
  }

  handleChange = (event) => {
    this.context.setDifficulty(DifficultyEnum[event.target.value])
  }

  render() {
    return (
      <>
      <h2 className="gameStartHeader">Instructions: </h2>
      <p>
        Each turn a pitch will be chosen at random.
        Click 'Play Note' to hear it, and click the button of the note you think
        it is. Select a difficulty and click 'Start' when you're ready!
      </p>
        <form onSubmit={this.handleSubmit}>
          <button className="gameStartButton" type="submit">Start</button>
          <select className="gameStartSelect"value={this.context.difficulty.string.toUpperCase()} onChange={this.handleChange} id="difficultySelect">
            <option value={"EASY"}>Easy (C,E,G)</option>
            <option value={"MEDIUM"}>Medium (C,D,E,F,G,A,B)</option>
            <option value={"HARD"}>Hard (All Notes)</option>
          </select>
        </form>
      </>
    );
  }
}

export default withRouter(GameStart);