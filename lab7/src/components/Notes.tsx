import React, {useState} from 'react';
import '../styles/Notes.css'
import {ITodo} from '../interfaces/interface';
import ToDoList from './ToDoList';

interface  INotes{
    toDos: ITodo[],
    changeToDos: any
}
const Notes: React.FC<INotes>=(props: INotes)=>{
    const [Curtitle, setTitle] = useState<string>("")
    const [Curdate, setDate] = useState<string>("")
    const [Curtask, setTast] = useState<string>("")
    const [TaskCounter, setTaskCounter] = useState<number>(1)

    const change =(values: ITodo[])=>{
        let count = TaskCounter
        let newToDo: ITodo = {
            title: Curtitle,
            Tdate: Curdate,
            task: Curtask,
            number:count
        }
        setTaskCounter(prev=>++count)
        for (let i=0;i<values.length;i++){
            if(newToDo.title == values[i].title)
            {
                console.log("есть такой таск")
                values[i].Tdate = newToDo.Tdate
                values[i].task = newToDo.task
                values[i].number = newToDo.number
            }
        }

    }
    const deleteTop =(values: ITodo[])=>{
        if(values.length > 3){
            props.changeToDos(values.slice(1))
        }
    }
    const deleteLast =(values: ITodo[])=>{
        if(values.length > 3) {
            console.log("delLiST ау")
            props.changeToDos(values.slice(0,values.length-1))
        }
    }
    const clearList =()=>{
            props.changeToDos([])
    }
    let divStyle={
        display:'inline-block',
        background:'#dad3d3',
        borderRadius: '20px',
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
let ChangeForm={
        marginLeft: '-30px'
}

        return(
            <>
                <div style={Main}>
                    <div style={ChangeForm}>
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
                                    value="Change"
                                    style={createBut}
                                    onClick = {()=>change(props.toDos)}
                                />
                                <input
                                    type="button"
                                    value="Top"
                                    style={createBut}
                                    onClick = {()=>deleteTop(props.toDos)}
                                />
                                <input
                                    type="button"
                                    value="Last"
                                    style={createBut}
                                    onClick = {()=>deleteLast(props.toDos)}
                                />
                                <input
                                    type="button"
                                    value="Clear"
                                    style={createBut}
                                    onClick = {()=>clearList()}
                                />
                            </div>
                        </div>
                    </div>
                    <ToDoList todos={props.toDos} counter={TaskCounter}  />
                </div></>)
}
export default Notes