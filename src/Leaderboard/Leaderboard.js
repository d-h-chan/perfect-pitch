import React, { Component } from 'react';
import Context from '../ContextManagement/Context.js'

class Leaderboard extends Component {

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
            </tr>
          </thead>
          <tbody>
            {this.context.scores.map(this.makeTable)}
          </tbody>
        </table>
      </>
    );
  }
}

export default Leaderboard;