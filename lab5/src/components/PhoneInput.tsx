import Phone from "react-phone-input-2"
import React, {useState} from 'react';
import "react-phone-input-2/lib/style.css"
interface IPhone{
    id: string
}
const PhoneInput:React.FC<IPhone> = (item:IPhone) => {
    const [value, setValue] = useState()

    const func=()=>{
        setValue(value)
    }
    let styleDiv = {
        marginLeft:'-50px'
    }
    return(
        <div style={styleDiv}>
            <Phone
                onlyCountries= {['ru','by', 'uk', 'pl','lt', 'lv']}
                placeholder = "Enter your number"
                value={value}
                onChange={func}
                />
        </div>
    )
}
export default PhoneInput