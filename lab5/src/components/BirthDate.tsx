import React from 'react';
import "../styles/BirthDate.css"
interface IDate{
    id: string
}
const BirthDate:React.FC<IDate> = (item:IDate) => {
    let days = []
    for(let i = 1; i < 32; i++){
        days.push(
            <option key={i}>{i}</option>
        )
    }

    let months:string[] = [
            "January ", "February", "March", "April", "May",
            "June", "July", "August", "September", "October",
            "November", "December"]

    let years = []
    for(let i = 2000; i < 2051; i++){
        years.push(
            <option key={i}>{i}</option>
        )
    }
    return(
        <div >
            <select id={item.id}>{days}</select>
            <select id={item.id}>
                {months.map((month,i)=>{
                    return <option key={i}>{month}</option>
                })}
            </select>
            <select id={item.id}>{years}</select>
        </div>
    )
}

export default  BirthDate