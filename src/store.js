const idToFrequencyMap = {
  1: 261.6256, //C
  2: 329.6276, //E
  3: 391.9954, //G
  4: 293.6648, // "D",
  5: 349.2282, //"F",
  6: 440.0000,// "A",
  7: 493.8833,// "B",
  8: 277.1826,// "C#/Db",
  9: 311.1270,// "D#/Eb",
  10: 369.9944, // "F#/Gb",
  11: 415.3047, // "G#/Ab",
  12: 466.1638,// "A#/Bb",
}


const noteToIdMap = {
  "C": 1,
  "C#/Db": 8,
  "D": 4,
  "D#/Eb": 9,
  "E": 2,
  "F": 5,
  "F#/Gb": 10,
  "G": 3,
  "G#/Ab": 11,
  "A": 6,
  "A#/Bb": 12,
  "B": 7,
}

const noteToFrequencyMap = {
  "C": 261.6256,
  "C#/Db": 277.1826,
  "D": 293.6648,
  "D#/Eb": 311.1270,
  "E": 329.6276,
  "F": 349.2282,
  "F#/Gb": 369.9944,
  "G": 391.9954,
  "G#/Ab": 415.3047,
  "A": 440.0000,
  "A#/Bb": 466.1638,
  "B": 493.8833,
}

const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]

const DifficultyEnum = {
  EASY: {
    value: 3,
    string: "easy"
  },
  MEDIUM: {
    value: 7,
    string: "medium"
  },
  HARD: {
    value: 12,
    string: "hard"
  }
}

Object.freeze(DifficultyEnum)

const gameLength = 5

const audioDuration = 0.75

export { idToFrequencyMap, noteToFrequencyMap, noteToIdMap, notes, DifficultyEnum, gameLength, audioDuration };