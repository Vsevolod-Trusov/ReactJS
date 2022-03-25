import React, {ChangeEvent, useRef, useState} from 'react';
import StudentInfoHandler from './StudentInfoHandler';
import Notes from './Notes';
import * as functions from './functions'

import "../styles/Inputs.css"


const StudentInfo=()=> {

    const [title, setTitle] = useState<string>()
    const [personName, setPersonName] = useState<string>()
    const [birthDate, setbirthDate] = useState<string>()
    const [enterDate, setEnterDate] = useState<string>()
    const [faculty, setFaculty] = useState<string>()
    const [group, setGroup] = useState<string>()
    const [speciality, setSpeciality] = useState<string>()
    const [eMail, seteMail] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [values, setValues] = useState<any[]>([])


        const handleSubmit = (event: any) => {
            let numbers: string[] | undefined = birthDate?.split('.')
            let numbs: string[] | undefined = enterDate?.split('.')
            let curAge = functions.getAge(numbers);
            let course = functions.getCourse(numbs)
            let FacultyGroupCourse = faculty+", "+ group+", "+course
            let mail = eMail
            let mailOperator = functions.getEMailOperator(eMail)
            let tel = phone
            let telOperator = functions.getPhoneOperator(phone)
            if (values === []) {
                setValues([])
            } else {
                setValues([{topic: "Name, Surname", value: personName},
                    {topic: "Current Age", value: curAge},
                    {topic: "Faculty, Group, Course", value: FacultyGroupCourse},
                    {topic: "Speciality", value: speciality},
                    {topic: "eMail", value: mail},
                    {topic: "eMail Operator", value: mailOperator},
                    {topic: "Phone", value: tel},
                    {topic: "Phone Operator", value: telOperator}])
            }
            setTitle("My Table")
            event.preventDefault();
        }

        let divStyle = {
            display: 'flex',
            justifyContent: 'center'
        }
        let NotesStyle = {
        display:'flex',
            justifyContent: 'center'
        }
        return (
            <>
                <div style={divStyle}>
                    <form onSubmit={handleSubmit}>
                        <h1 className="formTitle">My Form</h1>
                        <label htmlFor="PersonName">
                            Name Surname:
                            <input
                                type="text"
                                id='PersonName'
                                className="nameInputStyle"
                                value={personName}
                                onChange={(e) => {
                                    setPersonName(e.target.value)
                                }}
                            />
                        </label>
                        <label htmlFor="Age">
                            Birth Date:
                            <input
                                type="text"
                                id='Age'
                                className="ageInputStyle"
                                value={birthDate}
                                onChange={(e) => {
                                    setbirthDate(e.target.value)
                                }}
                            />
                        </label>
                        <label htmlFor="Enrtry">
                            Date of entry:
                            <input
                                type="text"
                                id='Enrtry'
                                className="dateInputStyle"
                                value={enterDate}
                                onChange={(e) => {
                                    setEnterDate(e.target.value)
                                }}
                            />
                        </label>
                        <label htmlFor="Faculty">
                            Faculty:
                            <input
                                type="text"
                                id='Faculty'
                                className="facultyInputStyle"
                                value={faculty}
                                onChange={(e) => {
                                    setFaculty(e.target.value)
                                }}
                            />
                        </label>
                        <label htmlFor="c">
                            Group:
                            <input
                                type="text"
                                id='Faculty, Course, '
                                className="groupInputStyle"
                                value={group}
                                onChange={(e) => {
                                    setGroup(e.target.value)
                                }}
                            />
                        </label>
                        <label htmlFor="Speciality">
                            Speciality:
                            <input
                                type="text"
                                id='Specaility'
                                className="specInputStyle"
                                value={speciality}
                                onChange={(e) => {
                                    setSpeciality(e.target.value)
                                }}
                            />
                        </label>
                        <label htmlFor="eMail">
                            eMail:
                            <input
                                type="email"
                                id='eMail'
                                className="eMailInputStyle"
                                value={eMail}
                                onChange={(e) => {
                                    seteMail(e.target.value)
                                }}
                            />
                        </label>
                        <label htmlFor="Phone">
                            Phone:
                            <input
                                type="tel"
                                id='Phone'
                                className="telInputStyle"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value)
                                }}
                            />
                        </label>
                        <input className="sendButton" type="submit" value="Send"/>
                    </form>
                </div>
                <h1 className='TableTitle'>{title}</h1>
                <StudentInfoHandler values={values}/>
                <Notes />
            </>
        )
    }
export default StudentInfo