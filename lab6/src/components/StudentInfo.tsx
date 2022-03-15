import React, {ChangeEvent, useRef, useState} from 'react';
import StudentInfoHandler from './StudentInfoHandler';
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

    const getPhoneOperator=(tel:string | undefined)=>{
        let spltTel = tel?.split(' ')
        if(spltTel) {
            let Operator
            if ( spltTel[1]== "44" ||spltTel[1] == "29" )
                Operator = "A1("+spltTel[1]+")"
            else  if ( spltTel[1]== "33")
                Operator = "MTC("+spltTel[1]+")"
            else if ( spltTel[1]== "25")
                Operator = "Life("+spltTel[1]+")"
            else if ( spltTel[1]== "17")
                Operator = "Beltelecom("+spltTel[1]+")"
            else
                Operator = spltTel[1]
            return Operator
        }else
            return "unknown"
    }
    const getEMailOperator=(mail:string | undefined)=>{
        let spltMail = mail?.split('@')
        if(spltMail) {
                return spltMail[1]
        }
        else
            return "unknown"
    }
    const getCourse = (numbers: string[] | undefined) => {
        let curCourse
        let now = new Date()
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (numbers) {
            let dob = new Date(Number(numbers[2]), Number(numbers[1]), Number(numbers[0]));
            curCourse = today.getFullYear() - dob.getFullYear()
            if (curCourse == 0)
                ++curCourse
            else if (curCourse > 4)
                curCourse = -1

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            curCourse == -1 ? "Finished" : curCourse
            return curCourse
        }
    }
        const getAge = (numbers: string[] | undefined) => {
            let curAge
            let now = new Date()
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            if (numbers) {
                let dob = new Date(Number(numbers[2]), Number(numbers[1]), Number(numbers[0]));
                curAge = today.getFullYear() - dob.getFullYear()
                if (today.getMonth() + 1 < dob.getMonth())
                    curAge -= 1
                else if (today.getDay() < dob.getDay())
                    curAge -= 1
            }
            return curAge
        }
        const handleSubmit = (event: any) => {
            let numbers: string[] | undefined = birthDate?.split('.')
            let numbs: string[] | undefined = enterDate?.split('.')
            let curAge = getAge(numbers);
            let course = getCourse(numbs)
            let FacultyGroupCourse = faculty+", "+ group+", "+course
            let mail = eMail
            let mailOperator = getEMailOperator(eMail)
            let tel = phone
            let telOperator = getPhoneOperator(phone)
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
            </>
        )
    }
export default StudentInfo