import React, { Component } from 'react';
import './InfoSection.css';


class InfoSection extends Component {
  render() {
    return (
      <>
        <h2 className="infoSectionHeader">What is perfect pitch?</h2>
        <p>
          Absolute pitch (AP), often called perfect pitch,
          is the ability of a person to identify or re-create
          a given musical note without the benefit
          of a reference tone. Applications of perfect pitch include: 
          naming individul pitches (e.g. F♯, A, G, C) played on various instruments,
          naming the key of a given piece of tonal music,
          identifying and naming all the tones of a given chord or other tonal mass,
          or accurately singing a named pitch.
        </p>
      </>
    );
  }
}

export default InfoSection;