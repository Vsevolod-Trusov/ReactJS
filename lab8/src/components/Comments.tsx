import React, {ChangeEvent, useEffect, useState} from 'react';
import '../styles/Comments.css'
import ListComments from '../components/Comment'
export interface IComment {
    login: string,
    secretWord: string,
    email: string,
    text: string
}
const Comments: React.FC = () => {
    const [Nlogin, setLogin] = useState<string>("")
    const [secretWord, setSecretWord] = useState<string>("")
    const [eMail, setEMail] = useState<string>("")
    const [comment, setComment] = useState<string>("")
    const [commentsList, setCommentsList] = useState<IComment[]>([])
    const [MyEnable, setEnable] = useState<boolean>(true)

    let flagDel: boolean = false

    const deleteElement = (ind: number) => {
       let comment  = prompt("Secret Word:","Secret Word");
       if(comment == commentsList[ind].secretWord )
       {
           if (ind >= 0 && ind <= commentsList.length) {
               setCommentsList(prev => [...prev.slice(0, ind), ...prev.slice(ind + 1)])
               flagDel = true
           }
       }
       else{
           alert("Wrong anwer")
       }

    }

    const changeElement = (ind: number) => {
        let comment  = prompt("Change Comment:","Text");
        if (ind >= 0 && ind <= commentsList.length) {
            let copy = [...commentsList]
            copy[ind].text = comment? comment : copy[ind].text
            setCommentsList(copy)
        }
    }

    const checkElement = (ind: number) => {
        let info:string ="Created by:\t"+ commentsList[ind].login+'\n'
        info +="eMail:\t"+ commentsList[ind].email+'\n'
        info +="Comment:\t"+ commentsList[ind].text+'\n'
        alert(info)
    }

    const handleAdd = () => {
        let Mycomment: IComment = {
            login: Nlogin,
            secretWord: secretWord,
            email: eMail,
            text: comment
        }

        setCommentsList(prev => [...prev, Mycomment])
    }

    useEffect(() => {
        if (Nlogin === "")
            setEnable(true)
        else if (comment === "")
            setEnable(true)
        else if (eMail === "")
            setEnable(true)
        else if (secretWord === "")
            setEnable(true)
        else
            setEnable(false)

    }, [MyEnable, Nlogin, eMail, comment])

    var fruitStateVariable = useState('банан'); // возвращает пару
    var fruit = fruitStateVariable[0]; // первый элемент в паре
    var setFruit = fruitStateVariable[1]; // второй элемент в паре

        return (
            <>
                <div className='FirstDiv'>
                    <div className='Inputs'>
                        <label htmlFor="LoginInput">
                            Enter login:
                            <input type="text"
                                   id="LoginInput"
                                   placeholder='Login'
                                   className='Inputs'
                                   value={Nlogin}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                       setLogin(e.target.value)
                                   }}
                            />
                        </label>
                    </div>
                    <div className='Inputs'>
                        <label htmlFor="CommentInput">
                            Enter Text:
                            <input type="text"
                                   id="CommentInput"
                                   placeholder='Comment'
                                   className='Inputs'
                                   value={comment}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                       setComment(e.target.value)
                                   }}
                            />
                        </label>
                    </div>
                    <div className='Inputs'>
                        <label htmlFor="SecretWord">
                            Enter Secret word:
                            <input type="password"
                                   id="SecretWord"
                                   placeholder='Secret word'
                                   className='Inputs'
                                   value={secretWord}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                       setSecretWord(e.target.value)
                                   }}
                            />
                        </label>
                    </div>
                    <div className='Inputs'>
                        <label htmlFor="MailInput">
                            Enter eMail:
                            <input type="email"
                                   id="MailInput"
                                   placeholder='eMail'
                                   value={eMail}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                       setEMail(e.target.value)
                                   }}
                            />
                        </label>
                    </div>
                    <button type='button' disabled={MyEnable} onClick={handleAdd} className='AddButton'>Add</button>
                </div>
                <div className='ListContainer'>
                    <ListComments list={commentsList}
                                  deleteElement={deleteElement}
                                  changeElement={changeElement}
                                  checkElement={checkElement}
                    />
                </div>
            </>
        );
    };

export default Comments

