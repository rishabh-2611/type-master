import { useRef, useState } from 'react'
import './Login.css'
import typing from '/images/typing.png'
import { useDispatch } from 'react-redux'
import Alert from '../Alert/Alert'
import { useNavigate } from 'react-router-dom'
import gameUtils from '../../utils/game.utils'
import { updateGameStats } from '../../store/slices/GameSlice'

function Login() {
  const playerName = useRef('')
  const difficulty = useRef('easy')

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleStartGameClick = () => {
    if(!playerName.current.value || playerName.current.value.trim() === '') {
      setAlertMessage('Please enter your name')
      setAlertType('warning')
      setShowAlert(true)
      return
    }

    if(!difficulty.current.value || difficulty.current.value === '') {
      setAlertMessage('Please select difficulty')
      setAlertType('warning')
      setShowAlert(true)
      return
    }

    const difficultyFactor = gameUtils.getDifficultyFactor(difficulty.current.value)
    dispatch(updateGameStats({ name: playerName.current.value, difficulty: difficulty.current.value, difficultyFactor }))
    navigate('/playground')
  }
  

  return (
    <>
    {showAlert && <Alert message={alertMessage} type={alertType}/>}
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row text-center">
        <div className="container-fluid">
          <img width="128" height="128" src={typing}/>
          <h1 className='my-3'>Type Master</h1>
          <input type="text" ref={playerName} className="form-control form-control-lg my-3" placeholder="Enter your name"/>
          <select ref={difficulty} className="form-select form-select-lg my-3">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button className='btn btn-outline-primary btn-lg btn-fluid' onClick={handleStartGameClick}>
            <i className="fa-solid fa-play me-2"></i>
            START GAME
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login


