import React, {useState, useEffect} from 'react';
import * as calendar from "./functions"
import {areEqual, areEquals, areMonthNotEqual, thereIs} from './functions';
import classnames from 'classnames'
import Notes from '../components/Notes'
import '../styles/CalendarStyle.css'
import {ITodo} from '../interfaces/interface';

const Calendar:React.FC=()=>{
    const[date , setDate] = useState<Date>(new Date())
    const[years, setYears] = useState<number[]>([
        2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
    ])
    const[weekDayNames, setWeekDayNames] = useState<string[]>([
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
    ])
    const[months, setMonths] = useState<string[]>([
        "January ", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"])


    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    const [selectedDays, setSelectedDays] = useState<Date[]>([])
    const [selectedDate, setSelectedDate]= useState<Date>()

   const [selectMonth, setSelectMonth] = useState<any>(currentDate.getMonth())
    const [selectYear, setSelectYear] = useState<any>(currentDate.getFullYear())
const [todos, setToDos] = useState<ITodo[]>([])

    const GetYear=()=> {
        return date.getFullYear()
    }

    const GetMonth=()=> {
        return date.getMonth()
    }

    const getDay=()=> {
        return date.getDate()
    }

    const handlePrevMonthButtonClick = () => {
        setSelectMonth(GetMonth()-1)
        setSelectYear(GetYear())
        const date = new Date(GetYear(), GetMonth()-1)
        setDate(prev=>date)
    }

    const handleNextMonthButtonClick = () => {
        setSelectMonth(GetMonth()+1)
        setSelectYear(GetYear())
        const date = new Date(GetYear(), GetMonth()+1)
        setDate(prev=>date)
    }

    useEffect(()=>{
            // console.log("M: " + selectMonth)
            // console.log("Y: " + selectYear)
            const date = new Date(selectYear,selectMonth)
            setDate(date)

    }, [selectMonth, selectYear])


    const handleDayClick = (date: Date) => {
            let flag: boolean = false
            setSelectedDate(date)
            for(var item of selectedDays){
                if(  date.getFullYear() === item.getFullYear() &&
                    date.getMonth() === item.getMonth() &&
                    date.getDate() === item.getDate()){
                    flag = true
                    //console.log("есть")
                    break
                }
            }


            if(flag){
                //console.log("удален")
                for(let i = 0; i<selectedDays.length; i++){
                        if(selectedDays[i].getFullYear() === date.getFullYear() &&
                            selectedDays[i].getMonth() === date.getMonth() &&
                            selectedDays[i].getDate() === date.getDate()){
                            setSelectedDays(prev=> [...prev.slice(0,i),...prev.slice(i+1)])
                        }
                }
            }
            else {
                //console.log("нет")
                setSelectedDays(prev=>[...selectedDays, date])
            }

        }

        let flag =false
        const addNode=(date: Date)=>{
        let task:ITodo = {
            title: date.getDate().toString(),
            Tdate: date.getDate().toString()+ "."+ Number(date.getMonth()+1)+"."+date.getFullYear().toString(),
            task: ""
        }
             setToDos(prev=>[...prev, task])
        }

 const changeToDos=(values: ITodo[])=>{
        setToDos(prev=>values)
}

    const monthData = calendar.getMonthDate(GetYear(), GetMonth())
    return (
       <div className='calendar'>
           <header>
               <button className="firstBut"
                       onClick={handlePrevMonthButtonClick}
               >{'<'}
               </button>

               <select
                   value={selectMonth}
                   onChange={(e)=>{setSelectMonth(e.target.value)
                   }}
               >
                   {months.map((name, index) =>
                       <option key={name} value={index}>{name}</option>
                   )}
               </select>

               <select
                   value={selectYear}
                   onChange={(e)=>{setSelectYear(e.target.value)
                   }}
               >
                   {
                       years.map((year) =>
                           <option key={year} value={year}>{year}</option>
                       )}
               </select>

               <button className="secondBut"
                       onClick={handleNextMonthButtonClick}
               >{'>'}
               </button>
           </header>
           <table>
               <thead>
               <tr>
                   {
                       weekDayNames.map((name) =>
                           <th key={name}>{name}</th>
                       )}
               </tr>
               </thead>

               <tbody>
               {
                   monthData.map((week, index) => {

                           return(
                       <tr key={index}>
                           {week.map((date, idx) =>
                               {

                                   return(
                                       <td key={idx}
                                           className={classnames({
                                               'none': areMonthNotEqual(date.getMonth(), GetMonth()),
                                               'today': areEqual(date, currentDate),
                                               '': thereIs(date, selectedDays),
                                               'selected': areEquals(date, selectedDays),
                                           })}
                                           onClick={() => handleDayClick(date)}
                                           onDoubleClick={() => addNode(date)}
                                       >{date.getDate()}</td>
                                   )
                               }
                           )}
                       </tr>
                           )
                       }
                   )
               }
               </tbody>
           </table>
          <Notes toDos={todos} changeToDos={changeToDos}/>
       </div>

    )
}

export default Calendar