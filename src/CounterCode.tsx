import React, { useState } from 'react'
import './count.css'
import { Button } from 'react-bootstrap'

const CounterCode = () => {
    const [count , setCount] = useState<number>(0);

    const incHandleFunction = () => {
        setCount(count + 1);
    }

    const decHandleFunction = () => {
        setCount(count - 1);
    }

    const valColor = count >= 0 ? 'green' : 'red';

  return (
    <div className="counter">
     <h1 style={{ color: valColor }} >{count}</h1>
      <Button onClick={incHandleFunction}>+</Button>
      <Button onClick={decHandleFunction}>-</Button>
      
    </div>
  )
}

export default CounterCode
