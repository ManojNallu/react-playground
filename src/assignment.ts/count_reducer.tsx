import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import './count_reducer.css';

const Count_Reducer = () => {

    const [count, SetCount] = useState(10);
    const[timefinished,settimefinished] = useState(false);


    useEffect(() => {

         setInterval(() => {
            SetCount((prevCount) => prevCount - 1);
        }, 1000);
        
    }, []);

    useEffect(() =>{
        if(count ===0){
            settimefinished(true);
        }
    });

    const handleFunction = () =>{
        SetCount(10);
        settimefinished(false);
    }
   
    return (
        <div className='count_data'>
            <h2>{timefinished ? <p>TakeOff</p> : count}  </h2>
            <Button  onClick={handleFunction}>Reset</Button>
        </div>
    )
}

export default Count_Reducer;
