import React from 'react';
import  './StudentInfo'
import {ITodo} from '../Interfaces';
import '../styles/toDoList.css'
interface ToDo {
    todos: ITodo[],
    counter: number
}
const ToDoList:React.FC<ToDo> =(props: ToDo)=>{

        let divStyle={
        display:'flex',
        justifyContent:'center'
    }
    return  (
        <div style={divStyle}>
            <ul>
                {
                    props.todos.map((item, id)=>{
                        if(id > 7) {
                                return (
                                    <>
                                        <li key={id} className='red'>
                                            <h5>Title: {item.title}</h5>
                                            <h5>You have a lot of notes</h5>
                                            <h5>Date: {item.Tdate}</h5>
                                            <h5>Task: {item.task}</h5>
                                        </li>
                                    </>
                                )
                            }
                            else{
                                return (
                                    <>
                                        <li key={id} className='default'>
                                            <h5>Title: {item.title}</h5>
                                            <h5>Date: {item.Tdate}</h5>
                                            <h5>Task: {item.task}</h5>
                                        </li>
                                    </>
                                )
                            }
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList