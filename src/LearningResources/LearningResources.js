import React, { Component } from 'react';
import './LearningResources.css';

class LearningResources extends Component {
  render() {
    return (
      <>
        <h2 className="learningResourcesHeader">Learning Resources</h2>
        <ul>
          <li>
            <a href="https://www.figur8.net/2015/10/22/music-resources-for-perfect-pitch-training/">More Training Resources</a>
          </li>
          <li>
            <a href="https://newatlas.com/adults-perfect-pitch-training/37786/">Study on Perfect Pitch</a>
          </li>
        </ul>
      </>
    );
  }
}

export default LearningResources;