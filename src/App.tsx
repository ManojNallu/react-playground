import React, { useEffect, useState } from 'react';
import Sample from './sample';
import './App.css';
import { WishComponent } from './wish.component';
import NewWishComponent from './wish.new.component';
import MultiTable from './multiTable';
import SimpleForm from './simple.form.component';
import MyCalCulatorApp from './calculator.app';
import ReactHookForm from './react.hookform';
import { useLocation } from 'react-router-dom';
import JSONDATA from './MOCK_DATA.json';
import SearchFilter from './search-filter';
import InputFeild from './components/inputFeild';
import { Todo } from './components/model';
import Todolist from './components/todolist';
import { profile } from 'console';




function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);

  const handleadd = (event: React.FormEvent) => {
      event.preventDefault();

      if(todo){
        setTodos([...todos, {id:Date.now(),todo:todo,isDone:false}]);
        setTodo("");
      }
  };

  console.log(todos);

  return (
    <>
      <div className='App'>
        <span className='heading'>Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo} handleadd={handleadd} />
        <Todolist todos={todos} setTodos={setTodos}/>
      </div>
      

    </>
  );

}

export default App;
