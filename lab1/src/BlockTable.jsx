import React from "react"
import './BlockTable.css';

let input_data = [
    {
        stock_name: "EFX",
        company_name: "Equifax Inc",
        price: 163.55,
        currency: "USD",
        change: "+9.03"
    },
    {
        stock_name: "IRM",
        company_name: "Iron Mountain Inc",
        price: 33.21,
        currency: "USD",
        change: "+1.42"
    },
    {
        stock_name: "NTAP",
        company_name: "NetApp Inc",
        price: 54.81,
        currency: "USD",
        change: "-6.01"
    },
    {
        stock_name: "CTL",
        company_name: "Centurylink Inc",
        price: 13.79,
        currency: "USD",
        change: "-1.37"
    }
]

let column = (j) => {
    let column = []
    for (let item in input_data[j]) {
        let styleName = {
            border: 'solid 1px black',
            color: 'black',
        }
        if (input_data[j][item] == input_data[j].change ) {
            if (input_data[j].change > 0) {
                styleName.color = 'green'
            } else{
                styleName.color = 'red'
            }
        }

    column.push(<td style={styleName}> {input_data[j][item]} </td>)
    }
    return column;
}

let building = () => {
    let building = []
    for (let j = 0; j < input_data.length; j++) {
        building.push(<tr> {column(j)}</tr>)

    }
    return building
}

export default function BlockTable() {
    return (<table  className= 'resultTable'> {building()} </table>);
}