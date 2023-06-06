import React, { useRef } from 'react'
import './styles.css'

export interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd : (e:React.FormEvent) => void;
}

//method 1 : const InputFeild = ({todo,setTodo}:{todo:string, setTodo:React.Dispatch<React.SetStateAction<string>>}) => {
//Method 2 : here u can pass the type of parameters directly in the function as well,, but we have written them as props interface and have given the typeof parameters
// and call that interface name in the function


const InputFeild = ({ todo, setTodo, handleAdd}: props) => {
    const inputref = useRef<HTMLInputElement>(null)
    return (

        <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputref.current?.blur();

         }}>
            <input ref={inputref} type='input' placeholder='Enter a task' value={todo} onChange={(e) => setTodo(e.target.value)} className='input_box' />
            <button className='input_submit' type='submit'>Go</button>
        </form>

    )
}

export default InputFeild;


