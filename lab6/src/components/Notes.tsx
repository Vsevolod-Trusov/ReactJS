import React, {useState} from 'react';
import '../styles/Notes.css'
import {ITodo} from '../Interfaces';
import ToDoList from './ToDoList';

const Notes=()=>{
    const [todos, setTodos] = useState<ITodo[]>([])
    const [Curtitle, setTitle] = useState<string>("")
    const [Curdate, setDate] = useState<string>("")
    const [Curtask, setTast] = useState<string>("")
    const [TaskCounter, setTaskCounter] = useState<number>(1)
    const [flag, setFlag] = useState<boolean>(false)

    const change =(values: ITodo[])=>{
        let count = TaskCounter
        let newToDo: ITodo = {
            title: Curtitle,
            Tdate: Curdate,
            task: Curtask,
            number:count
        }
        setTaskCounter(prev=>++count)

        setTodos(prev => [...todos,newToDo])
        console.log("Counter:"+ TaskCounter)
    }
    const deleteTop =(values: ITodo[])=>{
        if(values.length > 3){
            setTodos(prev =>prev.slice(1))
            let count = TaskCounter
            setTaskCounter(--count)
        }
    }
    const deleteLast =(values: ITodo[])=>{
        if(values.length > 3) {
            setTodos(prev => prev.slice(0,prev.length-1))
            let count = TaskCounter
            setTaskCounter(--count)
        }
    }
    let divStyle={
        display:'inline-block',
        background:'#dad3d3',
        borderRadius: '20px',
        marginLeft:'550px',
        padding: '10px 40px 10px 60px'
    }
    let createBut={
        marginLeft:'50px',
        padding: '10px',
        borderRadius: '15px',
        background: '#06c406',
        borderColor:'#06c406'
    }
let Main={
        marginTop:'30px'
    }

    return(
        <>
            <div style={Main}>
                <h1>Tasks</h1>
                <div style={divStyle}>
                    <input type="text"
                           placeholder="Title"
                           className='TasksInputs'
                           value={Curtitle}
                           onChange={(e)=>{setTitle(e.target.value)}}
                    />
                    <input type="date"
                           placeholder="Date"
                           className='TasksInputs'
                           value={Curdate}
                           onChange={(e)=>{setDate(e.target.value)}}
                    />
                    <input type="text"
                           placeholder="Task"
                           className='TasksInputs'
                           value={Curtask}
                           onChange={(e)=>{setTast(e.target.value)}}
                    />
                   <div className="Buttons">
                       <input
                           type="button"
                           value="Create"
                           style={createBut}
                           onClick = {()=>change(todos)}
                       />
                       <input
                           type="button"
                           value="Top"
                           style={createBut}
                           onClick = {()=>deleteTop(todos)}
                       />
                       <input
                           type="button"
                           value="Last"
                           style={createBut}
                           onClick = {()=>deleteLast(todos)}
                       />
                   </div>
                </div>
                <ToDoList todos={todos} counter={TaskCounter}  />
            </div></>
    )
}
export default Notes