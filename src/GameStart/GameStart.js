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
      <>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Start Game</button>
          <select value={this.context.difficulty.string.toUpperCase()} onChange={this.handleChange} id="difficultySelect">
            <option value={"EASY"}>Easy</option>
            <option value={"MEDIUM"}>Medium</option>
            <option value={"HARD"}>Hard</option>
          </select>
        </form>
      </>
    );
  }
}

export default withRouter(GameStart);