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
import { Todo } from './model';
import Todolist from './components/todolist';
import { profile } from 'console';


 

function App() {

  const [todo ,setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();

    if(todo){
      setTodos([...todos , { id:Date.now(), todo:todo, isDone:false}]);
      setTodo("");
    }
  };

  
  // console.log(todos);
  
  // const products : object[] = [
  //   { title: 'Cabbage', isFruit: false, id: 1 },
  //   { title: 'Garlic', isFruit: false, id: 2 },
  //   { title: 'Apple', isFruit: true, id: 3 },
  // ];

  


  return (
    <>
      <div className='App'>
        <span className='heading'>Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}  />
        <Todolist todos={todos} setTodos={setTodos}/> 
       </div>
      <h1>this is the main div</h1>

      {/* <ul>
        {products.map((product:any) => (
          <li key = {product.id} style={{color : product.isFruit ? "green":"red"}}>{product.title}</li>
        ))}
      </ul> */}

    </>
  );

}

export default App;
