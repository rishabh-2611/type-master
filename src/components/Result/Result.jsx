import { useDispatch, useSelector } from 'react-redux'
import { updateGameStats } from '../../store/slices/GameSlice'
import { useNavigate } from 'react-router-dom'
import gameUtils from '../../utils/game.utils'

const Result = () => {
  const gameStats = useSelector((state) => state.gameStats)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlayAgain = () => {
    const difficultyFactor = gameUtils.getDifficultyFactor(gameStats.difficulty)
    dispatch(updateGameStats({ currentWord:'', score: 0, difficultyFactor }))
    navigate('/playground')
  }

  return (
    <>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="row text-center">
            <div className="container-fluid">
                <p className='text-danger my-2' style={{fontSize:'80px'}}>GAME OVER</p>
                <p className='my-2' style={{fontSize:'60px'}}><i className="fa-solid fa-trophy text-warning me-1 mt-1"></i>Score: <span className="text-success ms-1"><b>{gameStats.score}</b></span></p>
                <button className='btn btn-outline-primary btn-lg btn-fluid my-2' onClick={handlePlayAgain}>
                    <i className="fa-solid fa-arrow-rotate-right me-2"></i>
                    PLAY AGAIN
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Result