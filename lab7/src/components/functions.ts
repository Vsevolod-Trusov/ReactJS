const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    Novermber: 10,
    December: 11
};
export function areEquals(a:any, b:Date[]) {
    let flag: boolean = false
    if (!a || !b) return false;

    for(let i = 0; i < b.length; i++ )
    {    if(a.getFullYear() === b[i].getFullYear() &&
            a.getMonth() === b[i].getMonth() &&
            a.getDate() === b[i].getDate())
    {
        flag = true
    }
    }
    return (
        flag
    );
}

export function thereIs(a:any, b:Date[]) {
    let flag: boolean = false
    if (!a || !b) return false;
    for(var item of b){
        if(  a.getFullYear() === item.getFullYear() &&
            a.getMonth() === item.getMonth() &&
            a.getDate() === item.getDate())
        {
            flag = true
            break
        }
        else{
            flag = true
        }
console.log(flag)
        return (flag);
    }
}
export function areEqual(a:any, b:any) {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export function areMonthNotEqual(a:any, b:any) {
    if (a === undefined || b === undefined) return false;
    return (a !== b);
}

export function isLeapYear(year:any) {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

export function getDaysInMonth(date:any) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
}

export function getDayOfWeek(date:any) {
    const dayOfWeek = date.getDay();
    if(dayOfWeek === 0) return 6
    return dayOfWeek - 1
    //return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

export function getMonthDate(year:any, month:any) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1 - getDayOfWeek(date);

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = new Array();
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            result[i][j] = new Date(year, month, day++);
        }
    }

    return result;
}