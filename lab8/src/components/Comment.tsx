import React from 'react';
import {IComment} from '../components/Comments';
import Image from '../components/Image'
import '../styles/CommentStyle.css';
interface IList {
    list: IComment[],
    deleteElement(number: number): any,
    changeElement(number: number):any,
    checkElement(number: number):any
}

const ListComments: React.FC<IList> = (props: IList) => {


    return (
        <div >
            {props.list.map((item: IComment, id: number) =>
                <div className="CommentBox" key={id}>
                    <div className='ContentContainer'>
                       <div>
                           <Image src='https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_user-circle-256.png' />
                          <span>{item.login}</span>
                       </div>
                        <div className='Text'>{item.text}</div>
                    </div>
                    <div className='ButtonsContainer'>
                        <button onClick={()=>props.changeElement(id)}>Edit</button>
                        <button onClick={()=>props.checkElement(id)}>Check</button>
                        <button onClick={()=>props.deleteElement(id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );

};
export default ListComments;