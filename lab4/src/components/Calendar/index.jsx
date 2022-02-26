import React from "react"
import * as calendar from "./calendar"
import classnames from "classnames"
import "./index.css"
import {areEqual, areMonthNotEqual} from "./calendar";

export default class Calendar extends React.Component {

    constructor(props) {
        super(props);

    }
    static defaultProps = {
        date: new Date(),
        years: [
            2010, 2011, 2012, 2013, 2014,
            2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
        ],
        weekDayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        months: [
            "January ", "February", "March", "April", "May",
            "June", "July", "August", "September", "October",
            "November", "December"],
        onChange: Function.prototype
    }

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDays: [],
        selectedDate: null,
    }

    get year() {
        return this.state.date.getFullYear()
    }

    get month() {
        return this.state.date.getMonth()
    }

    get day() {
        return this.state.date.getDate()
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1)
        this.setState({date})
    }
    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1)
        this.setState({date})
    }
    handleSelectChange = () => {
        const year = this.yearSelect.value
        const month = this.monthSelect.value
        const date = new Date(year, month)
        this.setState({date})
    }
    addDay = (date) => {
        const {selectedDays }= this.state;
        console.log("prev", selectedDays.length);
        this.setState({selectedDays: [...selectedDays, date]});
        console.log("next", selectedDays.length);
        /*console.log("add")
        console.log(this.state.selectedDays)*/

    }

    delDay = (date) => {
        let arr = [...this.state.selectedDays]
        for (let i = 0; i < arr.length; i++) {
            if (
                arr[i].getDate() === date.getDate() &&
                arr[i].getMonth() === date.getMonth() &&
                arr[i].getFullYear() === date.getFullYear()
            ) {
                console.log("delete")
                let ask = arr.splice(i, 1)
                this.setState(ask)
                console.log(this.state.selectedDays)
            }
        }


    }
    thereIsElem = (selectedDays, day) => {
        for (let i = 0; i < selectedDays.length; i++) {
            if (
                selectedDays[i].getDate() === day.getDate() &&
                selectedDays[i].getMonth() === day.getMonth() &&
                selectedDays[i].getFullYear() === day.getFullYear()
            ) {
                return true
            }
        }
        return false
    }
    handleDayClick = (date) => {
        this.setState({selectedDate: date});
        // console.log(date);
        // if(!this.state.selectedDays.includes(date)) {
        //     console.log("add d");
        //     // this.state.selectedDays.push(date);
        //     this.addDay(date);
        // } else {
        //     console.log("rm d");
        //     const idx = this.state.selectedDays.indexOf(date);
        //     if(idx !== -1) {
        //         const el = [...this.state.selectedDays];
        //         el.splice(idx, 1);
        //         this.setState({selectedDays: el});
        //     }
        // }
        // this.props.onChange(date)

        /* if(!this.thereIsElem(this.state.selectedDays, date))
        {
            this.addDay(date)
        }
        else{
            this.delDay(date)
        }*/
    }

    render() {
        const {years, months, weekDayNames} = this.props
        const monthData = calendar.getMonthDate(this.year, this.month)
        const {currentDate, selectedDate} = this.state

        return (
            <div className="calendar">
                <header>
                    <button className="firstBut"
                            onClick={this.handlePrevMonthButtonClick}
                    >{'<'}
                    </button>

                    <select
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {months.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select
                        ref={element => this.yearSelect = element}
                        value={this.year}
                        onChange={this.handleSelectChange}
                    >
                        {
                            years.map((year) =>
                                <option key={year} value={year}>{year}</option>
                            )}
                    </select>

                    <button className="secondBut"
                            onClick={this.handleNextMonthButtonClick}
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
                        monthData.map((week, index) =>
                            <tr key={index}>
                                {week.map((date, idx) =>
                                    <td key={idx}
                                        className={classnames({
                                            'today': areEqual(date, currentDate),
                                            'selected': areEqual(date, selectedDate),
                                            'none': areMonthNotEqual(date, this.month),
                                        })}
                                        onClick={() => this.handleDayClick(date)}
                                    >{date.getDate()}</td>
                                )}
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}