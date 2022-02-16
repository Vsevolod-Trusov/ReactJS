import React from "react"
import './ChessBoard.css'

function getRow(value) {
    let row = []
    for (let i = 0; i <8;i++) {
        let ceilWhiteStyle = {
            width: '80px',
            height: '80px',
            background: 'white',
            border: 'black solid 1px'
        }
        let ceilGreenStyle = {
            width: '80px',
            height: '80px',
            background: 'green',
            border: 'black solid 1px'
        }
        if ((i + value) % 2 === 0) {
            row.push(<td style={ceilWhiteStyle}></td>)
        } else {
            row.push(<td style={ceilGreenStyle}></td>)
        }
    }
    return(row);
}
function getLetters(){
    let letters = ['a','b','c','d','e','f','g','h']
    let lettersRow = [<td/>]
    let lettersStyle={
        height: '10px',
        textAlign:'center'
    }
    for (let i =0; i<letters.length; i++){
        lettersRow.push(<td style = {lettersStyle}>{letters[i]}</td>)
    }
    return(lettersRow);
}
function getModifiedValueLeft(value) {
    let modifiedValue = 8 - value;
    let tdStyle ={
        verticalAlign:'center',
        textAlign: 'right'
    }
    return(<td style = {tdStyle}>{modifiedValue}</td>)
}
function getModifiedValueRight(value) {
    let modifiedValue = 8 - value;
    let tdStyle ={
        verticalAlign:'center',
        textAlign: 'left'
    }
    return(<td style = {tdStyle}>{modifiedValue}</td>)
}
function getCeil(value){
    return(<tr >{getModifiedValueLeft(value)} {getRow(value)} {getModifiedValueRight(value)}</tr>);
}
function createBoard() {
    let chessBoard = []
    for (let i = 0; i<8; i++){
        chessBoard.push(getCeil(i))
    }
    return (chessBoard);
}
export default function ChessBoard(){
    return(
        <table className='chessTable'>
            {getLetters()}{createBoard()}{getLetters()}
        </table>
    );
}