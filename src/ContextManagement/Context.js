import React, { useState } from 'react'

//set the defaults
const Context = React.createContext({
  //currentNote: 440,
  setCurrentNote: () => {},
  //progress: 1,
  incrementProgress: () => {},
  //score: 0,
  incrementScore: () => {}
});

export default Context;
