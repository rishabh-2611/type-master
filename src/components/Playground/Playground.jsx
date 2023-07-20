import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlayerDetailsTopbar from '../PlayerDetailsTopbar/PlayerDetailsTopbar'

import Word from '../Word/Word';
import gameUtils from '../../utils/game.utils';
import { updateGameStats } from '../../store/slices/GameSlice'
import Timer from '../Timer/Timer';

const Playground = () => {
  const gameStats = useSelector((state) => state.gameStats)
  const dispatch = useDispatch()

  const words = useRef([])
  const typedWord = useRef('')

  const [showTimer, setShowTimer] = useState(false)

  useEffect(() => {
    words.current = gameUtils.getWords(gameStats.difficulty)
    const currentWord = words.current[Math.ceil(Math.random() * words.current.length)].toUpperCase()
    const maxTime = Math.ceil(currentWord.length/gameStats.difficultyFactor)
    const maxTimeLimit = maxTime >= 2 ? maxTime:2
    setShowTimer(true)
    dispatch(updateGameStats({ currentWord, maxTimeLimit }))
  }, [])

  const handleEnteredString = (e) => {
    const enteredString = e.target.value.toUpperCase()
    if(enteredString === gameStats.currentWord) {
      const currentWord = words.current[Math.ceil(Math.random() * words.current.length)].toUpperCase()
      const maxTime = Math.ceil(currentWord.length/gameStats.difficultyFactor)
      const maxTimeLimit = maxTime >= 2 ? maxTime:2
      dispatch(updateGameStats({ currentWord, maxTimeLimit, score: gameStats.score + 1 }))
      typedWord.current.value = ''
    }
  }

  return (
    <>
      <PlayerDetailsTopbar/>
      <div className="container">
        <div className="row">
          <div className="col-4 offset-4 d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
            <div className="row text-center">
              <div className="col-6 offset-3">
                { showTimer && <Timer/> }
              </div>
              <Word ref={typedWord} handleEnteredString={handleEnteredString} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Playground