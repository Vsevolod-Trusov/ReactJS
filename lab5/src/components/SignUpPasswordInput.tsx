import React, {useState} from 'react';
import "../styles/ProgressBarStyle.css"
interface IPassword{
    setstate(value: boolean): void
}
const SignUpEmailInput: React.FC<IPassword> = (item: IPassword) => {
    const [password, setpassword] = useState<string>()
    const [passwordtwo, setpasswordtwo] = useState<string>()

    // const enterPass = (event: React.ChangeEventHandler<HTMLInputElement>) =>{
    //     setpassword(event.target.value)
    // }


    const keyPressed = (event: React.KeyboardEvent) => {

        if (event.code === 'Enter') {

            if(password==passwordtwo)
            {
                alert("Ok!")
                item.setstate(false)
            }else{
                alert("Passwords are different!")
                item.setstate(true)
            }
        }
    }

    const getProgressBar=()=>{

        let points = 0
        let prBar = {
            width:"0%"
        }
        if(password?.match(/[a-z|a-я]/g))points++
        if(password?.match(/[A-Z|А-Я]/g))points++
        if(password?.match(/[0-9]/g))points++
        if(password?.match(/\W/g))points++

        if(points == 0)prBar.width = "0%"
        if(points == 1)prBar.width = "25%"
        if(points == 2)prBar.width = "50%"
        if(points == 3)prBar.width = "75%"
        if(points == 4)prBar.width = "100%"
        console.log("Points: "+points)
        return <div className="ProgressBackground">
            <div className="ProgressBar" style={prBar}>
            </div>
        </div>
    }

    let inputsStyle={
        display:'block'
    }
    let div = <div>
        <label htmlFor="InputPass">
            Enter the password:
            <input
                type="password"
                id="InputPass"
                style={inputsStyle}
                onChange= {(e)=>setpassword(e.target.value)}
            />
        </label>
        <label htmlFor="AgreePass">
            Confirm the password:
            <input
                type="password"
                id="AgreePass"
                style={inputsStyle}
                onChange= {(e)=>setpasswordtwo(e.target.value)}
                onKeyDown={keyPressed}
            />
        </label>
        {getProgressBar()}
    </div>
    return div;
};
export default SignUpEmailInput;