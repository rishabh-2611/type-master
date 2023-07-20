import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
  // Get game stats from store
  const gameStats = useSelector((state) => state.gameStats)

  const navigate = useNavigate()

  // Set current time value to max time limit for word
  const [timerCurrentValue, setTimerCurrentValue] = useState(gameStats.maxTimeLimit)

  // Reset the timer when score is changed
  useEffect(() => {
    setTimerCurrentValue(gameStats.maxTimeLimit)
  }, [gameStats.score])
  
  const updateTimer = () => {
    if(timerCurrentValue <= 0) {
        // Navigate to result page
        navigate('/result')
    }else {
        setTimerCurrentValue(timerCurrentValue-1)
    }
  }  

  // Update timer after every second
  useEffect(() => {
    const interval = setTimeout(() => updateTimer(), 1000);
    return () => clearInterval(interval);
  }, [timerCurrentValue])

  return (
    <CircularProgressbar value={timerCurrentValue} maxValue={gameStats.maxTimeLimit} text={`${timerCurrentValue} secs`}
        styles={buildStyles({ pathColor: "#f43f5e", textColor: "#212529" })} />
  )
}

export default Timer