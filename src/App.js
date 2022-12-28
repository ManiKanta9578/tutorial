import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum } from './actions'


const App = () => {

  const count = useSelector(state => state.changeTheNum);
  const dispatch = useDispatch(); 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {dispatch(incNum())}}>+</button>
      <button onClick={() => {dispatch(decNum())}}>-</button>
    </div>
  )
}

export default App