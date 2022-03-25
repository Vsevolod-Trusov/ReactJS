import Reacr from 'react'

interface IImage{
    src:string
}
const Image:React.FC<IImage> =(props:IImage)=>{
    return(
        <img src={props.src}/>
    )
}

export default Image