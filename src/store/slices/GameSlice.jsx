import  { createSlice } from '@reduxjs/toolkit'

const GameSlice = createSlice({
  name: 'game',
  initialState: { 
    name: '',
    difficulty: '', 
    score: 0, 
    isGameOver: false, 
    difficultyFactor: 0, 
    maxTimeLimit: 0 
  },
  reducers: {
    updateGameStats(state, action) {
      return {...state, ...action.payload}
    }
  }
})

export default GameSlice.reducer
export const { updateGameStats } = GameSlice.actions