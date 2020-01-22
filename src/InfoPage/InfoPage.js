import React, { Component } from 'react';
import GameStart from '../GameStart/GameStart.js';
import InfoSection from '../InfoSection/InfoSection.js'
import LearningResources from '../LearningResources/LearningResources.js'

class InfoPage extends Component {
  render() {
    return (
      <>
        <h2>Perfect Pitch Trainer</h2>
        <GameStart></GameStart>
        <InfoSection></InfoSection>
        <LearningResources></LearningResources>
      </>
    );
  }
}

export default InfoPage;