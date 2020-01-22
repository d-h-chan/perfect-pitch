import React, { useState } from 'react'

//set the defaults
const Context = React.createContext({
  currentNote: 440,
  setCurrentNote: () => {}
});

export default Context;
