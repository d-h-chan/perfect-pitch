import React, { Component } from 'react';
import Context from '../ContextManagement/Context.js'
import ScoresApiService from '../services/score-api-service'
import './Leaderboard.css';

class Leaderboard extends Component {

  componentDidMount() {
    //this.context.clearError()
    ScoresApiService.getScores()
      .then(this.context.setScores)
    //  .catch(this.context.setError)
  }

  static contextType = Context;

  makeTable = (item) => {
    return (
      <tr>
        <td>
          {item.user}
        </td>
        <td>
          {item.score}
        </td>
        <td>
          {item.difficulty}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <>
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Score</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {this.context.scores
            .filter(score => score.difficulty === this.context.difficulty.string)
            .map(this.makeTable)}
          </tbody>
        </table>
      </>
    );
  }
}

export default Leaderboard;