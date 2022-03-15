import React, {useState} from 'react';

interface IEmail {
    id: string,
    setstate(value: boolean): void,
    setMail(value: string | undefined):void
}

const SignUpEmailInput: React.FC<IEmail> = (item: IEmail) => {
    const [email, setemail] = useState<string>()

    const keyPressed = (event: React.KeyboardEvent) => {

        if (event.code === 'Enter') {
            /*console.log('Enter is pressed');
            console.log(email);*/
            if(new RegExp(/^\S+@\S+\.\S+$/).test(email as string))
            {
                /*console.log(new RegExp(/\\S+@\\S+\\.\\S+/).test(email as string));
                console.log('цепочка распознана');*/
                item.setstate(false)
                console.log("from emailInput: email is "+ email)
                setemail(email)
                let value = email
                item.setMail(value)
            }else{
                /*console.log(new RegExp(/\\S+@\\S+\\.\\S+/).test(email as string));
                console.log('цепочка не распознана');*/
                item.setstate(true)
                alert("Wrong email!")
            }
        }
    };
    let emailStyle = {
        display: 'block'
    };
    let input = <input
        type="text"
        value = {email}
        id={item.id}
        style={emailStyle}
        onChange={(e)=>setemail(e.target.value)}
        onKeyDown={keyPressed}/>;
    return input;
};
export default SignUpEmailInput;