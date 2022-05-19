import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    // JavaScript Function
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText("")
    }
    const statusHandler =(e) =>{
        setStatus(e.target.value)
    }

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Add task"/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
      </button>
      <div className ="select">
          <select onChange={statusHandler} name="todos" className="filter-todos">
              <option value="all">all</option>
              <option value="completed">completed</option>
              <option value="uncompleted">uncompleted</option>
          </select>
      </div>
    </form>
  )
}

export default Form
