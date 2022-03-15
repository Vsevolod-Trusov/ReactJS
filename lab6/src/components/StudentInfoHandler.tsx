import React, {useState} from 'react';
import '../styles/TableStyle.css';

interface  IStudentInfoHandler{
    values: any[]|undefined
}
const StudentInfoHandler: React.FC<IStudentInfoHandler> = (item: IStudentInfoHandler) => {

    let values = item.values === undefined? [{topic: 'Name, Surname', value: 'Trusov Vsevolod'},
            {topic: 'Current Age', value:  '19'},
            {topic: 'Faculty,Course, Group', value: 'IT, 2, 4' },
            {topic: 'Speciality',value: 'POIT'},
            {topic: 'eMail', value: '123@mail.ru'},
            {topic: 'eMail Operator', value: 'mail.ru'},
            {topic: 'Phone', value:'+375 (44) 797-67-16'},
            {topic:'Phone Operator', value: 'A1'}] : item.values


    const buildRows = () => {
        let styleForCol = {
            border: '1px solid black',
            height:'50px',
            width:"300px"
        }
        let styleForValue = {
            border: '1px solid black',
            height:'50px',
            width:"200px"
        }
        return (
          <>
              {
                 values.map((title, id)=>{
                      return(
                          <tr style={styleForValue} key={id}>
                              <td style={styleForCol}>
                                  {title.topic}
                              </td>
                              <td style={styleForCol}>
                                  {title.value}
                              </td>
                          </tr>
                      )
                  })
              }
          </>

        );
    };

    let MainDiv={
       display:'flex',
        justifyContent:'center'
    }

    return (
    <>
        <div style={MainDiv}>
            <table className="TableStyle">
                <tbody>
                {buildRows()}
                </tbody>
            </table>
        </div>
    </>
    );
};
export default StudentInfoHandler;