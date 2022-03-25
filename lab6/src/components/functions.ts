import React from 'react'




export function getPhoneOperator(tel:string | undefined){
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

export function getEMailOperator(mail:string | undefined){
    let spltMail = mail?.split('@')
    if(spltMail) {
        return spltMail[1]
    }
    else
        return "unknown"
}
export function getCourse (numbers: string[] | undefined) {
    let curCourse
    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (numbers) {
        let dob = new Date(Number(numbers[2]), Number(numbers[1]), Number(numbers[0]));
        curCourse = today.getFullYear() - dob.getFullYear()
        console.log(curCourse)
        if (curCourse == 0)
            ++curCourse
        else if (curCourse > 4)
            curCourse = -1

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        curCourse = curCourse === -1 ? "Finished" : curCourse
        return curCourse
    }
}
export function getAge (numbers: string[] | undefined){
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

