
//method 1 : const InputFeild = ({todo,setTodo}:{todo:string, setTodo:React.Dispatch<React.SetStateAction<string>>}) => {
//Method 2 : here u can pass the type of parameters directly in the function as well,, but we have written them as props interface and have given the typeof parameters
// and call that interface name in the function

import React, { useRef } from 'react';
import './styles.css'

export interface props{
    todo:string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleadd:(event: React.FormEvent)=>void;
}

//In this syntax, the component is defined as an arrow function with the destructured props directly within the function parameters. 
const InputFeild = ({todo, setTodo,handleadd}:props) => {

    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
                handleadd(e)
                inputRef.current?.blur();
    }}>
       <input type='input' ref={inputRef}  value={todo}
        onChange={(e) =>setTodo(e.target.value)} placeholder='Enter a Task' className='input_box' />
       <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild



