import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Context from '../ContextManagement/Context.js'
import {DifficultyEnum} from '../store.js'

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
      <><h2>Instructions: </h2>
      <p>
        Each turn a pitch will be randomly selected from the difficulty level.
        Click 'Play Note' to hear it, and click the button of the note you think
        it is! Click 'Start Game' when you're ready, or click 'reference pitch'
        to hear a 'C'
      </p>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Start Game</button>
          <select value={this.context.difficulty.string.toUpperCase()} onChange={this.handleChange} id="difficultySelect">
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