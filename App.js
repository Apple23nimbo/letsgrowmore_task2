import React, { useState } from 'react'
import "./App.css"
import Todoinputs from './components/Todoinputs'
import TodoList from './components/TodoList';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList =(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }
  const deleteListItem =(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return(
    <div className='main-container'>
      <div className='center-container'>
         <Todoinputs addList={addList}/>
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App

