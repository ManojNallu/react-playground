import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css';


interface props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: props) => {

    const [edit,setEdit] = useState<boolean>(false);
    
    const [editTodo,setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    function hadlesubmit(e: React.FormEvent<HTMLFormElement>, id: number) {
        e.preventDefault();

        setTodos(
            todos.map(todo => (
                todo.id === id ? {...todo, todo:editTodo} : todo
                )));
                setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
            inputRef.current?.focus();
    },[edit])


    return (
        <form className='Todos_single' onSubmit={(e) => hadlesubmit(e,todo.id)}>

            {
                edit ? (<input ref={inputRef}  value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>) : 
                
                todo.isDone ? (<s className='todos__single_text'>{todo.todo}</s>) :
                 (<span className='todos__single_text'>{todo.todo}</span>)
            }

        
            <div>

                <span className='icon' onClick={() =>{
                  
                    if(!edit && !todo.isDone){

                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit />
                </span>


                <span className='icon' onClick={() => handleDelete(todo.id)} >
                    <AiFillDelete />
                </span>
                <span className='icon' onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>

            </div>
        </form>
    );
}

export default SingleTodo
