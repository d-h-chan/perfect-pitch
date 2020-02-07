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

const gameLength = 20

const pianoVolume = 0.8

export {noteToIdMap, notes, DifficultyEnum, gameLength, pianoVolume };