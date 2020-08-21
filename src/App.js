import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const products = [
    {name: "Cricket Bat", price: "$200"},
    {name: "Badminton", price:"$150"},
    {name: "Football", price: "$250"},
    {name: "Caram", price: "$100"},
    {name: "Hocky", price: "$100"}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>First react practice</h3>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(list => <DemoItem productList = {list}></DemoItem>)
        }
        <Todo></Todo>
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUser(data))
  },[])
  
  return (
    <div>
      <h2>Dynamic users:{users.length}</h2>
     <ul>
       {
         users.map(user => <li>{user.name}</li>)
       }
       {
         users.map(userPhone => <li>{userPhone.phone}</li>)
       }
     </ul>
    </div>
  )
}

function DemoItem(props){
const colorIt = {
  width: "300px",
  height: "300px",
  backgroundColor: "purple",
  borderRadius: "5px",
  color: "white",
  padding: "4px",
  margin: "5px"
}
  return (
    <div style = {colorIt}>
      <h2>Name:{props.productList.name}</h2>
  <h3>Price:{props.productList.price}</h3>
      <button>shop Now</button>
    </div>
  )
}

function Todo() {
  const [todo, setTodo] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => setTodo(data))
  },[]);
  
  return (
    <div>
      <h2>Todo count:{todo.length}</h2>
    {
      todo.map(todoList => <li>{todoList.title}</li>)
    }
    </div>
  )
}

export default App;
