import React, { Component } from 'react';

class GameStart extends Component {
  render() {
    return (
      <>
        <form>
          <button type="submit">Start Game</button>
          <select>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </form>
      </>
    );
  }
}

export default GameStart;