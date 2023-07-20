import React from 'react';
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/display-name
const Word = React.forwardRef((props, ref) => {
  // Here in this component we have forwared the ref from parent component
  const { handleEnteredString } = props

  // Get game stats from store
  const gameStats = useSelector((state) => state.gameStats)

  return (
    <>
      <span className="my-3" style={{fontSize: '100px'}}>{gameStats.currentWord}</span>
      <input type="text" ref={ref} onChange={handleEnteredString} className="form-control form-control-lg my-3 text-center" style={{textTransform: 'uppercase'}}/>
    </>
  )
})

export default Word

Word.propTypes = {
    handleEnteredString: PropTypes.func.isRequired
}