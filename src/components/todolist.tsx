import React from 'react'
import './styles.css';
import { Todo } from './model';
import SingleTodo from './SingleTodo';

export interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist = ({ todos, setTodos }: Props) => {
  return (
    <div className='todos'>
      {todos.map(ele => (
        <SingleTodo todo={ele} key={ele.id} todos={todos} setTodos={setTodos} />
      ))}

    </div>
  )
}

export default Todolist
