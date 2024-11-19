import { VscBug } from "react-icons/vsc";
import {default as Topics} from "../components/question" 
import {useState} from 'react'
import Button from "../components/Button"

function Test(){
    const sports = "Soccer"
    const src = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1731557752/pet-adoption-site/rqntnynmpyem82o73njb.jpg"
    const w = "250", h="500", alt="german Shepherd"
    let info = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur aliquid pariatur cupiditate itaque. Eius odit minus alias quisquam perspiciatis harum?"
    let triggered = []
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    // if(triggered.length <= 0){
    //     return (<h1>This rendered first haha</h1>)
    // }


    return(
        <>
        <Button count = {count} onClick={handleClick}/>
        <Button count = {count} onClick={handleClick}/>
        <h1>Sabrina Shafer</h1>
        <p>Hello, my name is Sabrina</p>
        <h3>{sports}</h3>
        <img src={src} width={w} height={h} alt={alt} />
        <button><VscBug  size="200" style={{backgroundColor: 'green', color: "white"}}/></button>
        <Topics title="Stranger Things" info={info}/>
        <Button/>
        <Button/>
        {
            triggered.length > 0 ? <h1>Hello Data</h1> : <h1>nothing found</h1>
        }
        
        </>
        
    )
}

export default Test;

