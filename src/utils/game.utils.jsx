import dictionary from '../data/dictionary.json'

const getWords = (difficulty = 'easy') => {
  let words
  if(difficulty === 'easy') {
    words = dictionary.filter(word => { return word.length <= 4 } )
  } else if(difficulty === 'medium'){
    words = dictionary.filter(word => { return word.length >= 5 && word.length <= 8 })
  } else if(difficulty === 'hard') {
    words = dictionary.filter(word => { return word.length > 8 })
  }

  return words
}

const getDifficultyFactor = (difficulty = 'easy') => {
  let difficultyFactor
  if(difficulty === 'easy') {
    difficultyFactor = 1
  } else if(difficulty === 'medium'){
    difficultyFactor = 1.5
  } else if(difficulty === 'hard') {
    difficultyFactor = 2
  }

  return difficultyFactor
}

export default {
  getWords,
  getDifficultyFactor
}