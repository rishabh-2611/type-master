import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const PlayerDetailsTopbar = () => {
  // Get game stats from store
  const gameStats = useSelector((state) => state.gameStats)
  const navigate = useNavigate()

  const handleQuitGame = () => {
    navigate('/result')
  }

  return (
    <div className="container-fluid">
        <div className="d-flex justify-content-between m-4"  style={{fontSize: '22px'}}>
            <div className="text-left">
                <i className="fa-solid fa-user text-primary me-1 mt-1"></i> Player name: <span className="text-primary ms-2"><b>{gameStats.name.toUpperCase()}</b></span>
                <i className="fa-solid fa-gamepad text-info ms-3 mt-1"></i> Level: <span className="text-info ms-2"><b>{gameStats.difficulty.toUpperCase()}</b></span>
            </div>
            <div className="text-right border-primary">
                <i className="fa-solid fa-trophy text-warning me-1 mt-1"></i>Score: <span className="text-success ms-2"><b>{gameStats.score}</b></span>
                <button className="btn btn-outline-danger ms-3" onClick={handleQuitGame}><i className="fa-solid fa-xmark me-1 mt-1"></i>Quit Game</button>
            </div>
        </div>
    </div>
  )
}

export default PlayerDetailsTopbar
