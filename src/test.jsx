import { VscBug } from "react-icons/vsc";
import Question from "./question"

function Test(){
    const sports = "Soccer"
    const src = "https://res.cloudinary.com/dy2nnbnek/image/upload/v1731557752/pet-adoption-site/rqntnynmpyem82o73njb.jpg"
    const w = "250", h="500", alt="german Shepherd"
    let info = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur aliquid pariatur cupiditate itaque. Eius odit minus alias quisquam perspiciatis harum?"
    return(
        <>
        <h1>Sabrina Shafer</h1>
        <p>Hello, my name is Sabrina</p>
        <h3>{sports}</h3>
        <img src={src} width={w} height={h} alt={alt} />
        <button><VscBug  size="200" style={{backgroundColor: 'green', color: "white"}}/></button>
        <Question title="Stranger Things" info={info}/>
        </>
    )
}

export default Test;

