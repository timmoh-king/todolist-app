/**
 * @Author: Your name
 * @Date:   2022-05-19 18:40:23
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-05-19 19:01:32
 */
 import React, {useState, useEffect} from 'react'
 import './App.css';
 import axios from 'axios'
 import Button from './components/Button';
 import Form from './components/Form';
 import Todolist from './components/Todolist';
 
 function App() {
 
 //useState 
   const [inputText, setInputText] = useState ("")
   const [todos, setTodos] = useState([])
   const [status, setStatus] = useState("all")
   const [filteredTodos, setFilteredTodos] = useState([])
   const [setError]=useState("")
 
 // axios https://my-json-server.typicode.com/timmoh-king/server-application/todos  
   const getTodos = () => {
     axios.get('https://my-json-server.typicode.com/timmoh-king/server-application/todos')
       .then(res => setTodos(res.data))
       .catch( error => setError(error.message));
   }
   useEffect(()=>{
 getTodos();
 
   }, []);    
   
 
 // useEffect
 useEffect(() => {
   filterHandler()
 }, 
 // eslint-disable-next-line
 [todos, status]) 
   
 //Functions
 const filterHandler = () =>{
   switch (status){
       case "completed":
         setFilteredTodos(todos.filter(todo => todo.completed === true))
         break;
       case "uncompleted":
         setFilteredTodos(todos.filter(todo => todo.completed === false))
         break;
       default:
         setFilteredTodos(todos);
         break;
   }
 }
   const onClick=() => {
     alert("Thank you for using TodoList") }
  
     
   return (
     <div>
       <div className="container header">
     <h1>
       <span className="spanone" >Todo</span><span className="spantwo">List</span>
       </h1>
     <img src= "./taskprogress.jpg" className="logos img-fluid" alt="logo" />
 
     </div>
       <div>
     <div className= "container sections">
         <div className ="row d-flex">
         <div className = "col-md-12 col-lg-6 land">
         <h1>Welcome to TodoList</h1>
         <p>
        Have an issue with keeping up with your task? Tracking task progressions and completing them.
        TodList has got you covered. You can add and schedule tasks, check your progress and mark completed tasks. 
         </p>
         <h3>Let's schedule</h3>
         </div>
         <div className = "col-md-12 col-lg-6"> 
         <img src= "./illustrator1.jpg" className="img-fluid" alt="illustrator" />
 
   
         </div>
         </div>
     </div>
     </div>
 
       
       <div className="container sections">
       <div className="card-group">
       <div className="card">
       <h5 className="card-title"><span className="spantwo">Tasks added</span></h5>
       <Button color="black" text="add" onClick={onClick}/>  
       <img src="./taskprogress.jpg" className="card-img-top" alt="..."/>
       </div>
       <div className="card">
       <h5 className="card-title"><span className="spanone">Task progress</span></h5>
       <Button color="black" text="Task in progress" onClick={onClick}/>
       <img src="./addtask.jpg" className="" alt="..."/>
       </div>
       <div className="card">
       <h5 className="card-title"><span className="spanthree">Completed tasks</span></h5>
       <Button color="black" text="Completed tasks" onClick={onClick}/>
       <img src="./completedtask.jpg" className="" alt="..."/>
       </div>
     </div>
   </div>
 
   <Form 
     inputText={inputText}
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText} 
     setStatus={setStatus} 
   />
   
   <Todolist 
     todos={todos}
     setTodos={setTodos}
     filteredTodos={filteredTodos}
     
   />  
 
     </div>
    
   );
 }
 
 export default App;
 
