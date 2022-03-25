import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import React, {useState} from 'react'
let PhoneField = () =>{
    const [value, setValue] = useState()
    let styleDiv = {
        marginLeft:'450px'
    }
    return(

        <div style={styleDiv}>
            <PhoneInput
                onlyCountries= {['ru','by', 'uk', 'pl','lt', 'lv']}
                placeholder = "Enter your number"
                value = {value}
                onChange={setValue}
                />
        </div>
    )
}
export default PhoneField
