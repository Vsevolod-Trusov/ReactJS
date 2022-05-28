import React, {useState} from 'react'
import SignUpEmailInput from "../components/SignUpEmailInput"
import SignUpPasswordInput from './SignUpPasswordInput'
import BirthDate from './BirthDate'
import PhoneInput from './PhoneInput'
import "../styles/SignUpFormStyle.css"


interface IForm{
    title: string
}
const SignUpForm: React.FunctionComponent<IForm> =(item:IForm)=>{
    const [disable, setdisable] = useState<boolean>();
    const [email, setemail] = useState<string>();
    const [result, setresult] = useState<string>();

    const Loaded = ()=>{
        setstate(true)
        console.log(disable)
    }

    const setstate=(value: boolean) =>{
        setdisable(value)
    }
    let labelStyle={
        fontFamily:'system-ui',
        fontSize:'20px',

    }
    let radLabStyle={
        fontFamily:'system-ui',
        fontSize:'18px',
        display: 'block'
    }

    let radioStyle={
        display:'inline'
    }
    const setMail=(value: string)=>{
        setemail(value)
    }



    let element =
        <form action="#" className="MainForm">
            <h1>{item.title}</h1>
            <label htmlFor="SignUpEmailInput" style={labelStyle}>
                Enter your email:
                <SignUpEmailInput id="SignUpEmailInput" setstate={setstate} setMail={setMail}/>
            </label>
            <SignUpPasswordInput setstate={setstate}/>

            <label htmlFor="Name" style={labelStyle}>
                Your name:
                <input type="text" id="Name" placeholder="Name"/>
            </label>

            <label htmlFor="Surname" style={labelStyle}>
                Your surname:
                <input type="text" id="Surname" placeholder="Surname"/>
            </label>

            <label htmlFor="Man" style={radLabStyle}>
                Man
                <input name="Gender" id="Man" type="radio" checked style={radioStyle}/>
            </label>
            <label htmlFor="Woman" style={radLabStyle}>
                Woman
                <input name="Gender" id="Woman" type="radio" checked style={radioStyle}/>
            </label>
            <div className="PhoneDateDiv">
                <label htmlFor="Date" style={labelStyle}>
                    Enter your Date:
                    <BirthDate id="Date"/>
                </label>
            </div>
            <div className="PhoneDateDiv">
                <label htmlFor="Phone" style={labelStyle}>
                    Enter your Phone Number:
                    <PhoneInput id="Phone"/>
                </label>
            </div>
            <button disabled={disable} >Send</button>
            <div>
                {email}
            </div>
        </form>
    return element
}

export  default SignUpForm
