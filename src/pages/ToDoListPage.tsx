import { Header } from "../components/Header/Header"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/ToDoitem"
import { useState } from "react"

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])
    

    const createNewToDo = (text:string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos,newToDo])        
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo)=>{
            if(todo.id === toDoItem.id){
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodos)
        
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((todo) => todo.id !== toDoItem.id )
        setTodos(newTodos)       
    }

    return(
        <>
            <Header />
            <Form createNewToDo = {createNewToDo}/>
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
        </>

    )
}